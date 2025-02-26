//Componente GET --> Obtener datos

import React, {useEffect, useState} from 'react'

const Get = () => {

    //PASO 1: Definir los estados que necesitamos
    //tareas:guardamos las
    const [tareas, setTareas] = useState([]);

    //loading: para mostrar un mensaje mientras esperamos
    const [loading, setLoading] = useState(true);

    //Hacemos useEffect
    useEffect(() => {
        const fetchTareas = async () => {
            try {
                const response = await fetch('https://playground.4geeks.com/todo/users/DavidVaamonde');

                if(!response.ok){
                    throw new Error(`HTTP Error: Status: ${response.status}`);
                }
                const data = await response.json();
                setTareas(data.todos);
                console.log("Get OK: "+response.ok);
                console.log("Get Status: "+response.status);
                console.log("Get Text: "+response.text());
                console.log(data.todos);

            } catch (error) {
                console.log("Ha habido un error en los usuarios: ", error);
            }
        };
        fetchTareas();
    }, []);

        
    //PASO 4: Renderizamos los datos usando componentes de bootstrap

    return (
        <div className='card mt-3'>
            <div className='card-header'>
                <h2>Lista de tareas (GET)</h2>
            </div>
            <div className='card-body'>
                <ul>
                    { 
                        tareas.map((task) => (
                            <li key={task.id}>{task.label}</li>
                        ))            
                    }
                </ul>
            </div>
        </div>
    );
}

export default Get;