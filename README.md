# @tcons/provider-tconsaws

CDKTF (Cloud Development Kit for Terraform) bindings for the [terraform-provider-tconsaws](https://github.com/TerraConstructs/terraform-provider-tconsaws) - providing CloudFormation cfn-signal equivalent functionality using AWS SQS.

## Overview

This package provides TypeScript constructs for the `tconsaws` Terraform provider, enabling you to use CloudFormation-style signaling patterns in your CDKTF applications. The provider allows EC2 instances or other resources to signal their readiness via AWS SQS, similar to CloudFormation's `cfn-signal` functionality.

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
import { App, TerraformStack } from 'cdktf';
import { Provider as AwsProvider } from '@cdktf/provider-aws/lib/provider';
import { SqsQueue } from '@cdktf/provider-aws/lib/sqs-queue';
import { Instance } from '@cdktf/provider-aws/lib/instance';
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

## Development

This package uses [projen](https://projen.io) for project management and includes custom tasks for managing provider bindings.

### Available Tasks

```bash
# Check current provider version
pnpm check-provider-version

# Regenerate CDKTF bindings from current provider version
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

### Regenerating Provider Bindings

The CDKTF bindings are automatically generated from the Terraform provider schema. When the upstream terraform-provider-tconsaws releases a new version, you can update the bindings using:

```bash
# Update to latest version (edit cdktf.json manually, then run)
pnpm update-bindings

# Or update to specific version automatically
PROVIDER_VERSION=1.2.0 pnpm update-provider
```

**Manual Process:**
1. Edit `cdktf.json` to update the provider version constraint
2. Run `pnpm update-bindings` to regenerate TypeScript bindings
3. Run `pnpm build` to compile and verify the changes
4. Test the updated bindings
5. Commit and release

**Automated Process:**
The bindings are automatically updated when new provider versions are released through a GitHub Actions workflow that:
1. Detects new provider releases
2. Updates the `cdktf.json` configuration
3. Regenerates bindings using `cdktf get`
4. Creates a pull request with the changes
5. Publishes updated packages to npm

### Configuration Files

- **`cdktf.json`** - CDKTF configuration specifying provider version and output settings
- **`.projenrc.ts`** - Projen project configuration with custom tasks
- **`package.json`** - Generated npm package configuration (do not edit directly)

## License

This project is licensed under the [MPL-2.0 License](LICENSE) - the same license as the upstream Terraform provider.

## Contributing

This is an automatically generated CDKTF provider package. For issues related to:

- **Provider functionality**: Report issues to [terraform-provider-tconsaws](https://github.com/TerraConstructs/terraform-provider-tconsaws/issues)
- **CDKTF bindings**: Report issues to this repository
- **Signal binary**: Report issues to [signal-aws](https://github.com/TerraConstructs/signal-aws/issues)

Contributions are welcome! Please ensure that any changes maintain compatibility with the upstream Terraform provider.