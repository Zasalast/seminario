const { v4 } = require("uuid");
const AWS = require("aws-sdk");

/* const middy = require("@middy/core");
const httpJSONBodyParser = require("@middy/http-json-body-parser");  */

const createRead= async (event) => {

    const dynamodb = new AWS.DynamoDB.DocumentClient();

    const { Humedad, Temperatura } = JSON.parse(event.body);
    /* const { Humedad, Temperatura } = event.body; */
    const createdAt = new Date();
    const id = v4();
  
    console.log("created id: ", id);
  
    const newRead = {
      id,
      Humedad,
      Temperatura,
      createdAt,
      done: false,
    };
  
    await dynamodb
      .put({
        TableName: "Esp32Table",
        Item: newRead,
      })
      .promise();
  
    return {
      statusCode: 200,
      body: JSON.stringify(newRead),
    };
  };
  
/*   module.exports = {
    createRead: middy(createRead).use(httpJSONBodyParser()),
  }; */
module.exports={
    createRead,
}