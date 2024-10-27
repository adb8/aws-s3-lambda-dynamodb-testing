var AWS = require("aws-sdk");

var lambda = new AWS.Lambda({ region: "us-east-1" });

var params = {
  FunctionName: "myFirstLambdaFunction",
  Payload: JSON.stringify({ length: 5, width: 5, height: 5 }),
};

lambda.invoke(params, function (err, data) {
  if (err) console.log(err, err.stack);
  else console.log(data);
});

lambda.getFunction({ FunctionName: "myFirstLambdaFunction" }, function (err, data) {
  if (err) console.log(err, err.stack);
  else console.log(data);
});
