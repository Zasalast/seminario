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
$ implementación sin servidor
```

Después de la implementación, debería ver un resultado similar a:

```bash
Implementación de aws-node-http-api-project en la etapa de desarrollo (us-east-1)

✔ Servicio implementado para apilar aws-node-http-api-project-dev (152s)

punto final: OBTENER - https://xxxxxxxxxx.execute-api.us-east-1.amazonaws.com/
funciones:
   hola: aws-node-http-api-project-dev-hello (1,9 kB)
```

_Nota_: en la forma actual, después de la implementación, su API es pública y cualquiera puede invocarla. Para implementaciones de producción, es posible que desee configurar un autorizador. Para obtener detalles sobre cómo hacerlo, consulte [documentos de eventos http](https://www.serverless.com/framework/docs/providers/aws/events/apigateway/).

### Invocación

Después de una implementación exitosa, puede llamar a la aplicación creada a través de HTTP:

```bash
curl https://xxxxxxx.execute-api.us-east-1.amazonaws.com/
```

Lo que debería dar como resultado una respuesta similar a la siguiente (se eliminó el contenido de `input` por brevedad):

```json
{
   "message": "¡Vaya sin servidor v2.0! ¡Su función se ejecutó con éxito!",
   "aporte": {
     ...
   }
}
```

### Desarrollo local

Puede invocar su función localmente usando el siguiente comando:

```bash
sin servidor invocar local --función hola
```

Lo que debería dar como resultado una respuesta similar a la siguiente:

```
{
   "código de estado": 200,
   "body": "{\n \"message\": \"¡Vaya a Serverless v3.0! ¡Su función se ejecutó con éxito!\",\n \"input\": \"\"\n}"
}
```


Alternativamente, también es posible emular API Gateway y Lambda localmente usando el complemento `sin servidor sin conexión`. Para hacer eso, ejecute el siguiente comando:

```bash
instalación del complemento sin servidor -n serverless-offline
```

Agregará el complemento `serverless-offline` a `devDependencies` en el archivo `package.json` y también lo agregará a `plugins` en `serverless.yml`.

Después de la instalación, puede iniciar la emulación local con:

```
sin servidor fuera de línea
```

Para obtener más información sobre las capacidades de `serverless-offline`, consulte su [repositorio de GitHub] (https://github.com/dherault/serverless-offline).
