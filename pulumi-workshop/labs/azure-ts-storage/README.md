# Lab: Azure Storage (TypeScript)

This lab creates an Azure Resource Group and a Storage Account using Pulumi TypeScript and the Azure Native provider.

## Setup
- Install Pulumi CLI and Node.js.
- Login to Azure: `az login`.

## Run
```bash
npm install
pulumi stack init dev
pulumi config set azure-native:location eastus
pulumi up
```

Outputs:
- `resourceGroupName`
- `storageAccountName`

## Cleanup
```bash
pulumi destroy
```