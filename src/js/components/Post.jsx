//Componente POST --> Crear datos

import React, {useState} from "react";

const Post = () => {
    //Paso 1: Crear estados para nuestras tareas
    const [label, setLabel] = useState('');
    const [is_done, setIs_done] = useState(false);
    const [isError, setIsError] = useState(false);

    //Paso 2: Funcion que maneja el boton del formulario
    const handleSubmit = async (e) => {
        //Prevenimos que la página se recargue
        e.preventDefault();

        try {
            
        } catch (error) {
            
        }
    }

    return (
        <div className='card mt-3'>
            <div className='card-header'>
                <h2>Post TAREAS</h2>
            </div>
            <div className='card-body'>
                    
            </div>
        </div>
        
    );
}

export default Post;