var AWS = require("aws-sdk");
require("dotenv").config();

AWS.config.update({ region: "us-east-1" });

s3 = new AWS.S3({ apiVersion: "2006-03-01" });

BUCKET_NAME = process.env.BUCKET_NAME;
var bucketParams = {
  Bucket: BUCKET_NAME,
};

s3.createBucket(bucketParams, function (err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data.Location);
  }
});
