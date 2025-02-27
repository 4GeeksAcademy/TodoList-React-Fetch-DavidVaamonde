//Componente GET y DELETE --> Obtener y eliminar datos

import React from 'react'


const GetLista = ({alaTarea, eliminaTareas}) => {

    // Renderizamos los datos usando componentes de bootstrap

    return (
        <div className='container m-3'>
            <h2>Lista de tareas</h2>
            <ul>
                { 
                    alaTarea.map((tarea) => (
                        <li key={tarea.id}>
                            Tarea nº: {tarea.id} Contexto: {tarea.label} 
                            <button id="eliminaTarea" onClick={() => eliminaTareas(tarea.id)}>
                                X
                            </button>
                        </li>
                    ))            
                }
            </ul>

            <hr />
            <p>{alaTarea.length === 0 ? "No hay tareas, añade una" : alaTarea.length+" tarea(s)"}</p>
    
        </div>
    );
}

export default GetLista;