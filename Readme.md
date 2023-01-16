Obtener los datos de DynamoDB mediante una función Lambda utilizando el Framework Serverless crear endpoint para consumir en reactjs y graficar los mismos se realiza a grandes rasgos con los siguientes pasos.

1. Crea un archivo serverless.yml en la raíz de tu proyecto. Este archivo se utilizará para configurar y describir tu proyecto Serverless.

2. En el archivo serverless.yml, especifica el nombre de tu proyecto y el runtime de Node.js que estarás utilizando.

3. Agrega una sección llamada "provider" en el archivo serverless.yml. En esta sección, especifica el proveedor de cloud (AWS) y la región en la que deseas desplegar tu proyecto.

4. Agrega una sección llamada "functions" en el archivo serverless.yml. En esta sección, especifica el nombre de tus funciones Lambda y el archivo que contiene el código de la función.

5. Agrega una sección llamada "resources" en el archivo serverless.yml. En esta sección, especifica los recursos necesarios para tu proyecto, como DynamoDB o tablas.

6. Agrega una sección llamada "iamRoleStatements" en el archivo serverless.yml. En esta sección, especifica los permisos necesarios para acceder a DynamoDB y graficar los datos en React.js con Recharts.

7. Implementa la lógica en la función Lambda para obtener los datos de la tabla de DynamoDB mediante el uso de métodos de la biblioteca AWS SDK como scan o query.

8. Utiliza el método scan para obtener todos los elementos de la tabla de DynamoDB o el método query para obtener elementos específicos mediante la especificación de un filtro.

9. Una vez obtenidos los datos, retornarlos en la respuesta de la función Lambda en formato JSON.

10. En la aplicación React, utiliza un componente de Recharts para mostrar la gráfica y la librería axios para realizar una petición HTTP a la función Lambda.

11. En el componente React, al recibir los datos de la petición HTTP, actualiza el estado con los datos obtenidos y pásalos como propiedad al componente de Recharts para mostrarlos en la gráfica.

12. Utiliza el componente ResponsiveContainer de Recharts para asegurar que la gráfica se ajuste automáticamente al tamaño de pantalla.

13. Utiliza el componente LineChart de Recharts para mostrar los datos en una gráfica de línea, y los componentes Line, XAxis, YAxis.

En los Siguientes enlaces Encontrara más información acerca de el despliegue en sus diferentes etapas.

- [Repositorio IoT](https://github.com/Zasalast/esp32-incubadora-nex.git)
- [Repositorio FrontEnd](https://github.com/Zasalast/esp32-incubadora-nex.git)
- [Repositorio BackEnd](https://github.com/Zasalast/seminario/tree/backend)
