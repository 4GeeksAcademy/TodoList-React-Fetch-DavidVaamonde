//Componente POST --> Crear datos

import React, {useState} from "react";

const PostTarea = ({ agregaTarea, limpieza }) => {
    //Paso 1: Crear estados para nuestras tareas
    const [newTarea, setNewTarea] = useState([]);
    const [message, setMessage] = useState('');
    const [isError, setIsError] = useState(false);

    //Paso 2: Funcion que maneja el boton del formulario
    const handleSubmit = async (e) => {
        //Prevenimos que la página se recargue
        e.preventDefault();

        if(newTarea.trim() === "") 
            return;
        
        agregaTarea(newTarea);
        setNewTarea('');
        
    }

    return (
        <div className='container m-3'>
            
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    className="form-control"
                    id="labelTarea"
                    value={newTarea}
                    onChange={(e) => setNewTarea(e.target.value)}
                    required
                    placeholder="Añade una tarea..."
                />
                <button type="submit" className="btn btn-primary mt-3">
                    Crear tarea
                </button>
            </form>

            <button className="btn btn-danger mt-3" onClick={limpieza}>
                Limpieza de tareas
            </button>
                
            {/* Mensaje de exito o error con alertas de bootstrap */}
            {message && (
                <div className={`alert ${isError ? 'alert-danger' : 'alert-success'} mt-3`}>
                    {message}
                </div>
            )}
        </div>
        
    );
}

export default PostTarea;