# Lab: AWS S3 Static Website (TypeScript)

This lab creates a public S3 bucket configured for static website hosting and uploads a simple `index.html`.

## Setup
- Install Pulumi CLI and Node.js.
- Configure AWS credentials (e.g., `aws configure`).

## Run
```bash
npm install
pulumi stack init dev
pulumi up
```

Outputs:
- `websiteUrl` – the S3 website endpoint

## Cleanup
```bash
pulumi destroy
```