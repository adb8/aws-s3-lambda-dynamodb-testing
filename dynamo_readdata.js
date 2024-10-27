var AWS = require("aws-sdk");
require("dotenv").config();

AWS.config.update({ region: "us-east-1" });

ddb = new AWS.DynamoDB({ apiVersion: "2012-08-10" });

var params = {
  TableName: "CUSTOMER_LIST",
  Key: {
    CUSTOMER_ID: { N: "001" },
    CUSTOMER_NAME: { S: "Richard Rill" },
  },
  ProjectionExpression: "CUSTOMER_ID",
};

ddb.getItem(params, function (err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data.Item);
  }
});

var params = {
  TableName: "CUSTOMER_LIST",
  Key: {
    CUSTOMER_ID: { N: "001" },
    CUSTOMER_NAME: { S: "Richard Rill" },
  },
};

ddb.getItem(params, function (err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data.Item);
  }
});
