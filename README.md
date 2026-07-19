# @tcons/provider-tconsaws

CDKTN ([CDK Terrain](https://cdktn.io), the community fork of CDK for Terraform) bindings for the [terraform-provider-tconsaws](https://github.com/TerraConstructs/terraform-provider-tconsaws) - providing CloudFormation cfn-signal equivalent functionality using AWS SQS.

## Overview

This package provides TypeScript constructs for the `tconsaws` Terraform provider, enabling you to use CloudFormation-style signaling patterns in your CDKTN applications. The provider allows EC2 instances or other resources to signal their readiness via AWS SQS, similar to CloudFormation's `cfn-signal` functionality.

## Installation

```bash
npm install @tcons/provider-tconsaws
# or
yarn add @tcons/provider-tconsaws
# or  
pnpm add @tcons/provider-tconsaws
```

## Usage

```typescript
import { App, TerraformStack } from 'cdktn';
import { Provider as AwsProvider } from '@cdktn/provider-aws/lib/provider';
import { SqsQueue } from '@cdktn/provider-aws/lib/sqs-queue';
import { Instance } from '@cdktn/provider-aws/lib/instance';
// use signal resource to manage instance deployments
import { signal, provider } from '@tcons/provider-tconsaws';

class MyStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    // Configure providers
    new AwsProvider(this, 'AWS', {
      region: 'us-west-2',
    });

    new provider.TconsawsProvider(this, 'Tconsaws', {
      region: 'us-west-2',
    });

    // Create SQS queue for signals
    const signalQueue = new SqsQueue(this, 'SignalQueue', {
      name: 'deployment-signals'
    });

    // Create EC2 instances
    const instances = new Instance(this, `WebServer${i}`, {
      count: 3,
      ami: 'ami-0c02fb55956c7d316',
      instanceType: 't3.micro',
      userData: `#!/bin/bash
        yum update -y
        yum install -y httpd
        systemctl start httpd
        systemctl enable httpd
        
        # Download and install tcsignal-aws binary
        curl -L -o /usr/local/bin/tcsignal-aws.tgz "https://github.com/TerraConstructs/signal-aws/releases/download/v1.0.0/signal-aws_Linux_x86_64.tar.gz"
        tar -xzf /usr/local/bin/tcsignal-aws.tgz -C /usr/local/bin
        rm /usr/local/bin/tcsignal-aws.tgz
        
        # Signal success when ready
        /usr/local/bin/tcsignal-aws \\
          --queue-url "${signalQueue.url}" \\
          --id "deployment-abc123" \\
          --status SUCCESS
      `,
    });

    // Wait for all instances to signal readiness
    new signal.Signal(this, 'WaitForInstances', {
      queueUrl: signalQueue.url,
      signalId: 'deployment-abc123',
      expectedCount: 3
      retries: 3,
      timeouts: {
        create: '10m'
      },
    });
  }
}

const app = new App();
new MyStack(app, 'my-stack');
app.synth();
```

## Documentation

- **Terraform Provider**: [terraform-provider-tconsaws](https://github.com/TerraConstructs/terraform-provider-tconsaws)
- **Terraform Registry**: [registry.terraform.io/providers/terraconstructs/tconsaws](https://registry.terraform.io/providers/terraconstructs/tconsaws)
- **Signal Binary**: [signal-aws releases](https://github.com/TerraConstructs/signal-aws/releases)
- **CDK Terrain**: [cdktn.io](https://cdktn.io)

## Development

This package uses [projen](https://projen.io) for project management and includes custom tasks for managing provider bindings.

### Available Tasks

```bash
# Check current provider version against the Terraform registry
pnpm check-provider-version

# Regenerate CDKTN bindings from current provider version constraint
pnpm update-bindings

# Update to specific provider version and regenerate bindings
PROVIDER_VERSION=1.1.0 pnpm update-provider

# Build the package
pnpm build

# Run tests
pnpm test

# Release (automated via GitHub Actions)
pnpm release
```

> `update-bindings` runs `cdktn get`, which requires a Terraform-compatible CLI.
> When using OpenTofu, set `TERRAFORM_BINARY_NAME=tofu`.

### Regenerating Provider Bindings

The CDKTN bindings are automatically generated from the Terraform provider schema. When the upstream terraform-provider-tconsaws releases a new version, you can update the bindings using:

```bash
# Update to latest version within the current constraint
pnpm update-bindings

# Or update to a specific (e.g. new major) version
PROVIDER_VERSION=1.2.0 pnpm update-provider
```

**Manual Process:**
1. Edit `cdktf.json` to update the provider version constraint
2. Run `pnpm update-bindings` to regenerate TypeScript bindings
3. Run `pnpm build` to compile and verify the changes
4. Test the updated bindings
5. Commit and release

**Automated Process:**
The `provider-upgrade` GitHub Actions workflow runs weekly (and on demand) to:
1. Regenerate bindings with `cdktn get` against the version constraint in `cdktf.json`
2. Open a `fix(deps): update provider bindings` pull request when the generated code changed
3. On merge, the release workflow publishes the new version to npm (trusted publishing)

Regular dependency upgrades run weekly via the `upgrade-main` workflow.

### Configuration Files

- **`cdktf.json`** - provider generation config (file name unchanged in the CDK Terrain fork) specifying provider version constraint
- **`.projenrc.ts`** - Projen project configuration with custom tasks and workflows
- **`package.json`** - Generated npm package configuration (do not edit directly)

## License

This project is licensed under the [MPL-2.0 License](LICENSE) - the same license as the upstream Terraform provider.

## Contributing

This is an automatically generated CDKTN provider package. For issues related to:

- **Provider functionality**: Report issues to [terraform-provider-tconsaws](https://github.com/TerraConstructs/terraform-provider-tconsaws/issues)
- **CDKTN bindings**: Report issues to this repository
- **Signal binary**: Report issues to [signal-aws](https://github.com/TerraConstructs/signal-aws/issues)

Contributions are welcome! Please ensure that any changes maintain compatibility with the upstream Terraform provider.
