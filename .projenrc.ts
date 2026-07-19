import { cdk, github, javascript, ReleasableCommits } from "projen";

// CDK Terrain (community fork of CDKTF) versions - keep aligned with
// TerraConstructs/base and the cdktn-io prebuilt provider repos
const cdktnVersion = "^0.23.0";
const constructsVersion = "^10.6.0";
// exact version: pnpm/action-setup@v5 requires its "version" input to agree
// with the package.json "packageManager" field
const pnpmVersion = "9.9.0";

const project = new cdk.JsiiProject({
  author: "Vincent De Smet",
  authorAddress: "vincent.drl@gmail.com",
  defaultReleaseBranch: "main",
  jsiiVersion: "~5.9",
  typescriptVersion: "~5.9",
  name: "cdktf-provider-tconsaws",
  packageName: "@tcons/provider-tconsaws",
  projenrcTs: true,
  projenVersion: "^0.101.0",
  repositoryUrl:
    "https://github.com/TerraConstructs/cdktf-provider-tconsaws.git",
  description:
    "CDKTN (CDK Terrain) bindings for terraform-provider-tconsaws - CloudFormation cfn-signal equivalent functionality using AWS SQS",
  license: "MPL-2.0",
  keywords: [
    "cdktn",
    "cdktf",
    "terraform",
    "opentofu",
    "aws",
    "sqs",
    "signal",
    "cloudformation",
  ],
  sampleCode: false,

  // NPM publishing configuration
  npmAccess: javascript.NpmAccess.PUBLIC,
  releaseToNpm: true,
  npmTrustedPublishing: true,
  // Only cut releases for feat/fix commits (provider binding updates are
  // committed as "fix(deps)"), not for chore/ci dependency churn
  releasableCommits: ReleasableCommits.featuresAndFixes(),

  // GitHub configuration
  githubOptions: {
    mergify: false,
  },
  depsUpgradeOptions: {
    workflowOptions: {
      schedule: javascript.UpgradeDependenciesSchedule.WEEKLY,
    },
  },

  // Dependencies
  peerDeps: [`cdktn@${cdktnVersion}`, `constructs@${constructsVersion}`],
  devDeps: [
    `cdktn@${cdktnVersion}`,
    `cdktn-cli@${cdktnVersion}`,
    `constructs@${constructsVersion}`,
  ],

  // Package manager configuration
  packageManager: javascript.NodePackageManager.PNPM,
  pnpmVersion,
  prettier: false,
  eslint: false,
});

// silence COREPACK_ENABLE_AUTO_PIN warning
project.package.addField("packageManager", `pnpm@${pnpmVersion}`);

// Regenerate provider bindings from the terraform provider (cdktn get reads
// the provider constraint from cdktf.json - the config file name is unchanged
// in the CDK Terrain fork)
const updateBindings = project.addTask("update-bindings", {
  description: "Regenerate CDKTN provider bindings from terraform provider",
  env: { CHECKPOINT_DISABLE: "1" },
});
updateBindings.exec("cdktn get", {
  name: "Generate provider bindings",
});
updateBindings.exec("rm -rf src/tconsaws", {
  name: "Remove old bindings",
});
updateBindings.exec("mv .gen/providers/tconsaws src/", {
  name: "Move new bindings to src",
});
updateBindings.exec("cp .gen/versions.json src/version.json", {
  name: "Track generated provider version",
});
updateBindings.exec("rm -rf .gen", {
  name: "Clean up generation artifacts",
});

// Provider version update task (for major version bumps of the provider)
const updateProvider = project.addTask("update-provider", {
  description: "Update provider version in cdktf.json and regenerate bindings",
});
updateProvider.exec("echo 'Usage: PROVIDER_VERSION=1.2.0 pnpm update-provider'");
updateProvider.exec(
  "test -n \"$PROVIDER_VERSION\" || (echo 'Error: PROVIDER_VERSION environment variable required' && exit 1)",
  {
    name: "Validate provider version",
  },
);
updateProvider.exec(
  'sed -i.bak "s|registry.terraform.io/terraconstructs/tconsaws@.*|registry.terraform.io/terraconstructs/tconsaws@~> $PROVIDER_VERSION|" cdktf.json && rm -f cdktf.json.bak',
  {
    name: "Update provider version in cdktf.json",
  },
);
updateProvider.spawn(updateBindings);
updateProvider.spawn(project.compileTask);

// Check provider version task
const checkProvider = project.addTask("check-provider-version", {
  description: "Check if terraform provider has a newer version available",
});
checkProvider.exec(
  [
    "LATEST=$(curl -s https://registry.terraform.io/v1/providers/terraconstructs/tconsaws | jq -r .version)",
    "CURRENT=$(jq -r 'to_entries[0].value' src/version.json 2>/dev/null || echo \"unknown\")",
    'echo "Current bindings: $CURRENT / Latest provider release: $LATEST"',
  ].join("\n"),
  { name: "Compare bindings against registry" },
);

// Weekly job to rebuild the provider bindings and open a PR - merging the
// "fix(deps)" PR triggers the release workflow which publishes to npmjs.
// Follows the same two-job patch/PR pattern as the projen upgrade workflow.
const providerUpgrade = project.github!.addWorkflow("provider-upgrade");
providerUpgrade.on({
  schedule: [{ cron: "0 3 * * 1" }],
  workflowDispatch: {},
});
providerUpgrade.addJob("upgrade", {
  runsOn: ["ubuntu-latest"],
  permissions: {
    contents: github.workflows.JobPermission.READ,
  },
  outputs: {
    patch_created: {
      stepId: "create_patch",
      outputName: "patch_created",
    },
  },
  env: { CHECKPOINT_DISABLE: "1" },
  steps: [
    {
      name: "Checkout",
      uses: "actions/checkout@v4",
      with: { ref: "main" },
    },
    {
      name: "Setup Terraform",
      uses: "hashicorp/setup-terraform@v3",
      with: { terraform_wrapper: false },
    },
    {
      name: "Setup pnpm",
      uses: "pnpm/action-setup@v5",
      with: { version: pnpmVersion },
    },
    {
      name: "Install dependencies",
      run: "pnpm i --frozen-lockfile",
    },
    {
      name: "Regenerate provider bindings",
      run: "npx projen update-bindings",
    },
    {
      name: "Find mutations",
      id: "create_patch",
      run: [
        "git add .",
        'git diff --staged --patch --exit-code > repo.patch || echo "patch_created=true" >> $GITHUB_OUTPUT',
      ].join("\n"),
    },
    {
      name: "Upload patch",
      if: "steps.create_patch.outputs.patch_created",
      uses: "actions/upload-artifact@v4.4.0",
      with: {
        name: "provider-upgrade.patch",
        path: "repo.patch",
        overwrite: true,
      },
    },
  ],
});
providerUpgrade.addJob("pr", {
  name: "Create Pull Request",
  needs: ["upgrade"],
  runsOn: ["ubuntu-latest"],
  permissions: {
    contents: github.workflows.JobPermission.READ,
  },
  if: "${{ needs.upgrade.outputs.patch_created }}",
  steps: [
    {
      name: "Checkout",
      uses: "actions/checkout@v4",
      with: { ref: "main" },
    },
    {
      name: "Download patch",
      uses: "actions/download-artifact@v4",
      with: { name: "provider-upgrade.patch", path: "${{ runner.temp }}" },
    },
    {
      name: "Apply patch",
      run: '[ -s ${{ runner.temp }}/repo.patch ] && git apply ${{ runner.temp }}/repo.patch || echo "Empty patch. Skipping."',
    },
    {
      name: "Set git identity",
      run: [
        'git config user.name "github-actions"',
        'git config user.email "github-actions@github.com"',
      ].join("\n"),
    },
    {
      name: "Create Pull Request",
      uses: "peter-evans/create-pull-request@v6",
      with: {
        token: "${{ secrets.PROJEN_GITHUB_TOKEN }}",
        "commit-message": [
          "fix(deps): update provider bindings",
          "",
          "Rebuilds the CDKTN bindings for terraconstructs/tconsaws.",
          "See details in [workflow run].",
          "",
          "[Workflow Run]: ${{ github.server_url }}/${{ github.repository }}/actions/runs/${{ github.run_id }}",
          "",
          "------",
          "",
          '*Automatically created by projen via the "provider-upgrade" workflow*',
        ].join("\n"),
        branch: "github-actions/provider-upgrade",
        title: "fix(deps): update provider bindings",
        body: [
          "Rebuilds the CDKTN bindings for terraconstructs/tconsaws.",
          "See details in [workflow run].",
          "",
          "[Workflow Run]: ${{ github.server_url }}/${{ github.repository }}/actions/runs/${{ github.run_id }}",
          "",
          "------",
          "",
          '*Automatically created by projen via the "provider-upgrade" workflow*',
        ].join("\n"),
        author: "github-actions <github-actions@github.com>",
        committer: "github-actions <github-actions@github.com>",
        signoff: true,
      },
    },
  ],
});

project.synth();
