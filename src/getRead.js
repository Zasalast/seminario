const AWS = require("aws-sdk");

const getRead = async (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();

  const { id } = event.pathParameters;

  const result = await dynamodb
    .get({
      TableName: "esp32_tabla",
      Key: { id },
    },)
    .promise();

  const read = result.Item;

  return {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    body: read,
  };
};

module.exports = {
  getRead,
};