const AWS = require("aws-sdk");

const getReads = async (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();

  const result = await dynamodb.scan({ TableName: "esp32_tabla" }).promise();

  const reads = result.Items;

  return {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    body: {
        reads,
    },
  };
};

module.exports = {
  getReads,
};