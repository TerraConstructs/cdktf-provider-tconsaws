import { 
  cdktf,
  javascript,
  // TaskCategory,
} from "projen";

const project = new cdktf.ConstructLibraryCdktf({
  author: "Vincent De Smet",
  authorAddress: "vincent.drl@gmail.com",
  cdktfVersion: "^0.20.8",
  defaultReleaseBranch: "main",
  jsiiVersion: "~5.7.0",
  name: "cdktf-provider-tconsaws",
  packageName: "@tcons/provider-tconsaws",
  projenrcTs: true,
  repositoryUrl:
    "https://github.com/TerraConstructs/cdktf-provider-tconsaws.git",
  description:
    "CDKTF bindings for terraform-provider-tconsaws - CloudFormation cfn-signal equivalent functionality using AWS SQS",
  license: "MPL-2.0",
  keywords: ["cdktf", "terraform", "aws", "sqs", "signal", "cloudformation"],

  // NPM publishing configuration
  npmAccess: javascript.NpmAccess.PUBLIC,
  releaseToNpm: true,

  // GitHub configuration
  githubOptions: {
    mergify: false,
  },

  // Dependencies
  peerDeps: ["cdktf@^0.20.8", "constructs@^10.3.0"],
  devDeps: ["cdktf@^0.20.8", "constructs@^10.3.0"],

  // Package manager configuration
  packageManager: javascript.NodePackageManager.PNPM,
  pnpmVersion: "9",
  prettier: false,
  eslint: false,
});

// silence COREPACK_ENABLE_AUTO_PIN warning
project.package.addField("packageManager", "pnpm@9.9.0");

// Add custom tasks for CDKTF provider binding management
const updateBindings = project.addTask("update-bindings", {
  description: "Regenerate CDKTF provider bindings from terraform provider",
  // category: TaskCategory.BUILD,
});

// Main binding regeneration workflow
updateBindings.exec("echo 'Starting CDKTF provider binding regeneration...'");
updateBindings.exec("pnpx cdktf-cli get", { 
  name: "Generate provider bindings"
});
updateBindings.exec("rm -rf src/tconsaws", {
  name: "Remove old bindings"
});
updateBindings.exec("mv .gen/providers/tconsaws src/", {
  name: "Move new bindings to src"
});
updateBindings.exec("rm -rf .gen", {
  name: "Clean up generation artifacts"
});
updateBindings.exec("echo 'Provider bindings regenerated successfully'");

// Provider version update task
const updateProvider = project.addTask("update-provider", {
  description: "Update provider version in cdktf.json and regenerate bindings",
  // category: TaskCategory.BUILD,
});

updateProvider.exec("echo 'Usage: PROVIDER_VERSION=1.2.0 pnpm update-provider'");
updateProvider.exec("test -n \"$PROVIDER_VERSION\" || (echo 'Error: PROVIDER_VERSION environment variable required' && exit 1)", {
  name: "Validate provider version"
});
updateProvider.exec('sed -i.bak "s|registry.terraform.io/terraconstructs/tconsaws@.*|registry.terraform.io/terraconstructs/tconsaws@~> $PROVIDER_VERSION|" cdktf.json', {
  name: "Update provider version in cdktf.json"
});
updateProvider.spawn(updateBindings);
updateProvider.spawn(project.compileTask); // Ensure compilation after regeneration
updateProvider.exec("echo 'Provider version updated to $PROVIDER_VERSION and bindings regenerated'");

// Check provider version task (similar to cdktf-provider-project pattern)
const checkProvider = project.addTask("check-provider-version", {
  description: "Check if terraform provider has a newer version available",
  // category: TaskCategory.TEST,
});

checkProvider.exec("echo 'Checking for provider updates...'");
checkProvider.exec(`
CURRENT_VERSION=$(grep -o 'tconsaws@~> [0-9.]*' cdktf.json | cut -d' ' -f2)
echo "Current provider version: \$CURRENT_VERSION"
echo "Check https://registry.terraform.io/providers/terraconstructs/tconsaws for latest version"
`, { name: "Display current version and registry link" });

project.synth();
