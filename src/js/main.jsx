import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './Home/Home';
import ToDoList from './components/ToDoList';

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<ToDoList />);
