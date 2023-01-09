import React from 'react';
import { Bar } from 'react-chartjs-2';

function DataDisplayer(props) {
    return (
        <div>

            <Bar
                data={{
                    labels: ['Humedad', 'Temperatura'], // Establecemos los labels para cada barra en el gráfico
                    datasets: [
                        {
                            label: 'Historiograma de temperatura Ambiente y Humedad', // Nombre de la serie de datos
                            data: [props.data.humidity, props.data.temperature], // Establecemos los valores para cada barra en el gráfico utilizando los datos que obtuvimos
                            backgroundColor: 'rgba(255, 99, 132, 0.2)', // Color de relleno de cada barra
                            borderColor: 'rgba(255, 99, 132, 1)', // Color del borde de cada barra
                            borderWidth: 1 // Ancho del borde de cada barra
                        }
                    ]
                }}
            />
        </div>
    );
}

export default DataDisplayer;