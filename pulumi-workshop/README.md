# Pulumi Workshop

Hands-on labs to learn Pulumi by building small, cloud-native resources. Labs are self-contained projects using TypeScript.

## Prerequisites
- Pulumi CLI installed: https://www.pulumi.com/docs/install/
- Node.js 18+ and npm
- A cloud account and credentials configured locally for the lab you choose:
  - AWS: Configure credentials (e.g., `aws configure`) or environment variables
  - Azure: Azure CLI `az login`

## Labs
- AWS
  - `labs/aws-ts-s3-website`: Static website hosted on S3 (public read, basic index page)
- Azure
  - `labs/azure-ts-storage`: Resource Group and Storage Account

## Quickstart
Pick a lab and follow its README. Typical flow:

```bash
# from the lab directory
npm install
pulumi stack init dev
pulumi up
```

Destroy when done:
```bash
pulumi destroy
```

## Structure
- `labs/` – Contains independent Pulumi projects
- Each lab:
  - `Pulumi.yaml` – Project metadata
  - `index.ts` – Pulumi program
  - `package.json`, `tsconfig.json` – Build config
  - `README.md` – Lab-specific instructions

## Notes
- Use separate stacks per environment (e.g., `dev`, `prod`).
- Costs: These examples are minimal, but creating cloud resources may incur charges. Always destroy resources after completing a lab.