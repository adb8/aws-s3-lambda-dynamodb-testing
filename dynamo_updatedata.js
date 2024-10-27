var AWS = require("aws-sdk");
var fs = require("fs");
require("dotenv").config();

AWS.config.update({ region: "us-east-1" });

ddb = new AWS.DynamoDB({ apiVersion: "2012-08-10" });

var params = {
  TableName: "CUSTOMER_LIST",
  Key: {
    CUSTOMER_ID: { N: "1" },
    CUSTOMER_NAME: { S: "Richard Rill" },
  },
  UpdateExpression: "set CUSTOMER_NAME = :name",
  ExpressionAttributeValues: {
    ":name": { S: "Richard Roy" },
  },
  ReturnValues: "ALL_NEW",
};

ddb.updateItem(params, function (err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data.Attributes);
  }
});
