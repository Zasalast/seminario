<!--
title: 'Ejemplo de punto de enlace HTTP simple de AWS en NodeJS'
description: 'Esta plantilla demuestra cómo crear una API HTTP simple con Node.js ejecutándose en AWS Lambda y API Gateway utilizando Serverless Framework'.
diseño: documento
marco: v3
plataforma: AWS
idioma: nodoJS
enlace de autor: 'https://github.com/serverless'
nombre del autor: 'Serverless, inc.'
autorAvatar: 'https://avatars1.githubusercontent.com/u/13742415?s=200&v=4'
-->

# API HTTP de nodo de marco sin servidor en AWS

Esta plantilla demuestra cómo crear una API HTTP simple con Node.js ejecutándose en AWS Lambda y API Gateway utilizando Serverless Framework.

Esta plantilla no incluye ningún tipo de persistencia (base de datos). Para obtener ejemplos más avanzados, consulte el [repositorio serverless/examples](https://github.com/serverless/examples/) que incluye Typescript, Mongo, DynamoDB y otros ejemplos.

## Uso

### Despliegue

```
$  serverless deploy
```

Después de la implementación, debería ver un resultado similar a:

```Deploying aws-node-http-api-project to stage dev (us-east-1)

✔ Service deployed to stack aws-node-http-api-project-dev (152s)

endpoint: GET - https://xxxxxxxxxx.execute-api.us-east-1.amazonaws.com/
functions:
  hello: aws-node-http-api-project-dev-hello (1.9 kB)
```

_Nota_: en la forma actual, después de la implementación, su API es pública y cualquiera puede invocarla. Para implementaciones de producción, es posible que desee configurar un autorizador. Para obtener detalles sobre cómo hacerlo, consulte [documentos de eventos http](https://www.serverless.com/framework/docs/providers/aws/events/apigateway/).

### Invocación

Después de una implementación exitosa, puede llamar a la aplicación creada a través de HTTP:

```bash
curl https://xxxxxxx.execute-api.us-east-1.amazonaws.com/
```

Lo que debería dar como resultado una respuesta similar a la siguiente (se eliminó el contenido de `input` por brevedad):

```json
json
{
  "message": "¡Vaya Serverless v2.0! ¡Su función se ejecutó con éxito!",
  "input": {
    ...
  }
}
```

### Desarrollo local

Puede invocar su función localmente usando el siguiente comando:

```bash
serverless invoke local --function hello
```

Lo que debería dar como resultado una respuesta similar a la siguiente:

```
{
  "statusCode": 200,
  "body": "{\n  \"message\": \"Go Serverless v3.0! Your function executed successfully!\",\n  \"input\": \"\"\n}"
}
```


Alternativamente, también es posible emular API Gateway y Lambda localmente usando el complemento `sin servidor sin conexión`. Para hacer eso, ejecute el siguiente comando:

```bash
serverless plugin install -n serverless-offline
```

Agregará el complemento `serverless-offline` a `devDependencies` en el archivo `package.json` y también lo agregará a `plugins` en `serverless.yml`.

Después de la instalación, puede iniciar la emulación local con:

```
serverless offline
```
  Para obtener los datos de DynamoDB mediante una función Lambda utilizando el Framework Serverless crear endpoint para consumir los datos. 
  Seguir los siguientes datos.

Crea un archivo serverless.yml en la raíz de tu proyecto. Este archivo se utilizará para configurar y describir tu proyecto Serverless.

En el archivo serverless.yml, especifica el nombre de tu proyecto y el runtime de Node.js que estarás utilizando.

Agrega una sección llamada "provider" en el archivo serverless.yml. En esta sección, especifica el proveedor de cloud (AWS) y la región en la que deseas desplegar tu proyecto.

Se puede guiar con el siguiente archivo:
```service: aws-lambda-dynamodb 
frameworkVersion: '3' # frameworkVersion: versión del framework Serverless que se está utilizando

provider: #provider: sección para especificar el proveedor de cloud y la configuración general del proyecto
  name: aws # name: nombre del proveedor de cloud (AWS en este caso)
  runtime: nodejs14.x # runtime: versión de Node.js que se está utilizando
  httpApi: #httpApi: configuración para habilitar el uso de una API HTTP
    cors: true # cors: habilita el soporte para CORS (permite que otras aplicaciones accedan a los recursos de esta)
  iamRoleStatements: # iamRoleStatements: sección para especificar los permisos necesarios para acceder a los recursos de AWS
    - Effect: Allow # Effect: Allow para permitir el acceso a los recursos especificados
      Action:   # Action: lista de acciones permitidas, en este caso se permite todas las acciones de DynamoDB
        - dynamodb:* 
      Resource:  # Resource: lista de recursos a los que se tiene acceso, en este caso se especifica una tabla específica de DynamoDB
        - arn:aws:dynamodb:us-east-1:919554715646:table/esp32_tabla



functions: # functions: sección para especificar las funciones Lambda del proyecto
  getReads: # getReads: nombre de la función
    handler: src/getReads.getReads # handler: archivo que contiene el código de la función
    events:  # events: eventos que desencadenan la ejecución de la función
      - httpApi:  # httpApi: configuración para exponer la función como una ruta de una API HTTP
          path: /reads  # path: ruta de la API
          method: get # method: El tipo de petición
          cors: true #cors: habilita el soporte para CORS en el metodo (permite que otras aplicaciones accedan a los recursos de esta)
 ```

 ```  
 // Importar el SDK de AWS para JavaScript
const AWS = require("aws-sdk");
// Definir una función para recuperar datos de DynamoDB
const getReads = async (event) => {
  // Crea una nueva instancia de DynamoDB.DocumentClient
  const dynamodb = new AWS.DynamoDB.DocumentClient();

  // Realiza una operación scan en la tabla "NombreTabla"
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
  ```
  Una vez configurado el archivo serverless.yml, se deben seguir los siguientes pasos para desplegar el proyecto:

1. Ejecutar el comando "npm install" para instalar las dependencias necesarias del proyecto.
2. Ejecutar el comando "serverless deploy" para desplegar el proyecto en AWS.
3. Verificar que el proyecto se ha desplegado correctamente en la consola de AWS.
4. Utilizar la URL de la función Lambda para acceder a los datos de DynamoDB del EndPoint.

Tener encuenta que se pueden configurar múltiples funciones para diferentes operaciones CRUD (Crear, Leer, Actualizar, Eliminar).  

Para obtener más información sobre las capacidades de `serverless-offline`, consulte su [repositorio de GitHub] (https://github.com/dherault/serverless-offline).
