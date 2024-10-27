var AWS = require("aws-sdk");
var fs = require("fs");
var path = require("path");
require("dotenv").config();

AWS.config.update({ region: "us-east-1" });

var s3 = new AWS.S3({ apiVersion: "2006-03-01" });

BUCKET_NAME = process.env.BUCKET_NAME;
var uploadParams = { Bucket: BUCKET_NAME, Key: "", Body: "" };

FILE_NAME = "sample copy.txt";
fileStream = fs.createReadStream(FILE_NAME);
fileStream.on("error", function (err) {
  console.log("File Error", err);
});
uploadParams.Body = fileStream;

uploadParams.Key = "folder/" + path.basename(FILE_NAME);

s3.upload(uploadParams, function (err, data) {
  if (err) {
    console.log("Error", err);
  }
  if (data) {
    console.log("Upload Success", data.Location);
  }
});
