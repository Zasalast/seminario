// Importar el SDK de AWS para JavaScript
const AWS = require("aws-sdk");
// Definir una función para recuperar datos de DynamoDB
const getReads = async (event) => {
  // Crea una nueva instancia de DynamoDB.DocumentClient
  const dynamodb = new AWS.DynamoDB.DocumentClient();

  // Realiza una operación scan en la tabla "esp32_tabla"
  // El método de escaneo devuelve una promesa, así que esperamos el resultado
  const result = await dynamodb.scan({ TableName: "esp32_tabla" }).promise();

  // Asigna la propiedad Items del resultado a una variable llamada reads
  const reads = result.Items;

  // Retorna un objeto con un estatus de 200, 
  //un objeto headers con una cabecera para permitir el acceso 
  //desde cualquier origen y un objeto body con los datos de reads
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

// Exportar la función para que pueda ser importada por otros archivos
module.exports = {
  getReads,
};
