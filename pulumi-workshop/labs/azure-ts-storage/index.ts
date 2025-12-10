import * as resources from "@pulumi/azure-native/resources";
import * as storage from "@pulumi/azure-native/storage";
import * as pulumi from "@pulumi/pulumi";

const config = new pulumi.Config();
const location = config.get("location") || "eastus";

// Resource Group
const rg = new resources.ResourceGroup("rg", { location });

// Storage Account (name must be globally unique)
const account = new storage.StorageAccount("workshopstor", {
  resourceGroupName: rg.name,
  location: rg.location,
  sku: { name: storage.SkuName.Standard_LRS },
  kind: storage.Kind.StorageV2,
});

export const resourceGroupName = rg.name;
export const storageAccountName = account.name;