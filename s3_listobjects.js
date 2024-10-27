var AWS = require("aws-sdk");
require("dotenv").config();
var fs = require("fs");

AWS.config.update({ region: "us-east-1" });

s3 = new AWS.S3({ apiVersion: "2006-03-01" });

BUCKET_NAME = process.env.BUCKET_NAME;
console.log("Bucket Name: ", BUCKET_NAME);
var bucketParams = {
  Bucket: BUCKET_NAME,
};

s3.listObjects(bucketParams, function (err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data);
  }
});

var objectParams = {
  Bucket: BUCKET_NAME,
  Key: "sample.txt",
};

s3.getObject(objectParams, function (err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data);
    bufferData = data.Body;
    fs.writeFile("sample downloaded.txt", bufferData, function (err) {
      if (err) {
        console.log("Error", err);
      } else {
        console.log("File downloaded successfully");
      }
    });
  }
});
