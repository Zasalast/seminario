const AWS = require("aws-sdk");

const deleteRead = async (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();
  const { id } = event.pathParameters;

  await dynamodb
    .delete({
      TableName: "Esp32Table",
      Key: {
        id,
      },
    })
    .promise();

  return {
    status: 200,
    body: {
      message: 'Deleted read'
    }
  };
};

module.exports = {
  deleteRead,
};