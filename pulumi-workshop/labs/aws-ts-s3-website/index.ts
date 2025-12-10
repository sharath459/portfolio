import * as aws from "@pulumi/aws";
import * as pulumi from "@pulumi/pulumi";

// Create an S3 bucket
const siteBucket = new aws.s3.Bucket("site", {
  website: {
    indexDocument: "index.html",
  },
});

// Public read policy for the bucket website
const publicReadPolicy = siteBucket.arn.apply(arn => JSON.stringify({
  Version: "2012-10-17",
  Statement: [{
    Effect: "Allow",
    Principal: "*",
    Action: ["s3:GetObject"],
    Resource: [ `${arn}/*` ]
  }]
}));

new aws.s3.BucketPolicy("site-policy", {
  bucket: siteBucket.id,
  policy: publicReadPolicy,
});

// Upload a simple index.html
new aws.s3.BucketObject("index.html", {
  bucket: siteBucket,
  key: "index.html",
  content: `<html><head><title>Pulumi Workshop</title></head><body><h1>Hello from Pulumi!</h1></body></html>`,
  contentType: "text/html",
});

// Export the website endpoint
export const websiteUrl = siteBucket.websiteEndpoint;