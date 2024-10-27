var AWS = require("aws-sdk");
var fs = require("fs");
require("dotenv").config();

AWS.config.update({ region: "us-east-1" });

ddb = new AWS.DynamoDB({ apiVersion: "2012-08-10" });

var params = {
  ExpressionAttributeValues: {
    ":name": { S: "Richard Roe" },
  },
  FilterExpression: "contains (CUSTOMER_NAME, :name)",
  ProjectionExpression: "CUSTOMER_ID, CUSTOMER_NAME",
  TableName: "CUSTOMER_LIST",
};

ddb.scan(params, function (err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data.Items);
  }
});
