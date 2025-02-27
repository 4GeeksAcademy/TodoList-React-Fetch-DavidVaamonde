import React, {useState, useEffect} from 'react'
import Get from './GetLista'
import Post from './PostTarea'


const ToDoList = () => {

    // Definir los estados que necesitamos
    //tareas:guardamos las tareas
    const [tareas, setTareas] = useState([]);
    
    //loading: para mostrar un mensaje mientras esperamos
    const [loading, setLoading] = useState(true);

    //isError: para mostrar mensaje de error
    const [isError, setIsError] = useState(false);

    // Hacemos fetch con método GET
    const fetchTareas = async () => {
        try {
            const response = await fetch('https://playground.4geeks.com/todo/users/davidvb');

            if(!response.ok){
                throw new Error(`HTTP Error: Status: ${response.status}`);
            }
            const data = await response.json();
            setTareas(data.todos);
            console.log("Get OK: "+response.ok);
            console.log("Get Status: "+response.status);
            console.log(data.todos);
            setLoading(false);

        } catch (error) {
            console.log("Ha habido un error en los usuarios: ", error);
            setLoading(false);
        }
    };

    // Hacemos useEffect en el GET
    useEffect(() => {

        fetchTareas();

    }, []);

    //Hacemos el método POST para agregar una tarea
    async function postTarea(nuevaTarea) {
        try {
            //Hacemos la peticion POST
            const response = await fetch("https://playground.4geeks.com/todo/todos/davidvb", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    label: nuevaTarea,
                    is_done: false,
                }),
            });

            if (!response.ok) 
                throw new Error('Error al crear el POST.');
            
            console.log("Post OK: "+response.ok);
            console.log("Post Status: "+response.status);

            //Recargamos otra vez la lista
            await fetchTareas();
            
        } catch (error) {
            setMessage("Error en post: "+error.message);
            setIsError(true);
        }
    }

    //Hacemos el método DELETE para eliminar una tarea
    async function eliminarTarea(id) {
        try {
            const response = await fetch(`https://playground.4geeks.com/todo/todos/${id}`, {
                method: "DELETE",
            });

            if (!response.ok)
                throw new Error("Error al eliminar la tarea");

            console.log("Delete OK: "+response.ok);
            console.log("Delete Status: "+response.status);

            //Recargamos otra vez la lista
            await fetchTareas();

        } catch(error) {
            console.log("Ha habido un error al eliminar tarea: ", error);
            setLoading(false);
        }
    }

    //Hacemos el botón para que haga la limpieza de tareas
    async function limpieza() {
        try {
            const response = await fetch("https://playground.4geeks.com/todo/users/davidvb");
            if (!response.ok) 
                throw new Error("Error al vacias las tareas");

            const advertencia = prompt("Estás seguro? (Escribe 'si' para confirmar)");

            if (advertencia === 'si') {
                alert("Entendido");

                const data = await response.json();
                const tareas = data.todos; //Lsita de tareas

                tareas.forEach( tarea => {
                    const deleteResponse = fetch(`https://playground.4geeks.com/todo/todos/${tarea.id}`, {
                        method: "DELETE",
                    });

                    if (!deleteResponse.ok) {
                        console.log("Error al vaciar tareas.");
                    }
                })

                console.log("Vacio OK: "+response.ok);
                console.log("Vacio Status: "+response.status);
                //Recargamos otra vez la lista pero a cero
                setTareas([]);
            } else
                alert("Jo, que mal!");

        } catch (error) {
            console.log("Ha habido un error al intentar limpiar las tareas: ", error);
            setLoading(false);
        }
    }

    //Si está cargando, muestra el spinner de cargando
    if (loading) {
        return(
            <div className='d-flex justify-content-center'>
                <div className='spinner-border text-primary' role='status'>
                    <span className='visually-hidden'>Cargando...</span>
                </div>
            </div>
        );
    }

    return (
        <div className='container p-4'>
            <h1>TodoList con React y API Rest</h1>
    
            <div className='row'>
                <div className='col-12'>
                    <Get alaTarea={tareas} eliminaTareas={eliminarTarea}/>
                </div>
                <div className='col-12'>
                    <Post agregaTarea={postTarea} limpieza={limpieza} />
                </div>
                
                
            </div>
        </div>
    );
}

export default ToDoList;