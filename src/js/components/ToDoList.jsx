import React, {useState, useEffect} from 'react'
import Get from './Get'
import Post from './Post'
import Put from './Put'
import Delete from './Delete'

const ToDoList = () => {

    const [todo, setTodo] = useState([]);


    return (
        <div className='container p-4'>
            <h1>Lista de Tareas:</h1>
    
            <div className='row'>
                <div className='col-12'>
                    <Get />
                </div>
                <div className='col-12'>
                    <Post />
                </div>
                <div className='col-12'>
                    <Put />
                </div>
                <div className='col-12'>
                    <Delete />
                </div>
            </div>
        </div>
    );
}

export default ToDoList;