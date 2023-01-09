import React, { useState, useEffect } from 'react';
import DataDisplayer from './DataDisplayer';
import axios from 'axios';
axios.defaults.withCredentials = true;  // Habilitamos las cookies de sesión en las solicitudes
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
function DataFetcher() {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('/https://b2luadwf3k.execute-api.us-east-1.amazonaws.com/reads');
                const data = await response.json();
                setData(data);
            } catch (error) {
                setError(error);
            }
        }

        fetchData();
    }, []);

    if (error) {
        return <div>An error occurred: {error.message}</div>;
    }

    if (!data) {
        return <div>Loading...</div>;
    }

    return <div>{JSON.stringify(data)}</div>;
    /*  return (
         <div>
          
             <DataDisplayer data={data} />
         </div>
     ); */
}

export default DataFetcher; 