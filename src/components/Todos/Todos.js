import React, {useEffect, useState} from 'react';
import {axiosServices} from "../../services/axiosServices";
import {Todo} from "./Todo/Todo";


const Todos = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
       axiosServices.getTodos().then(({data}) => setTodos(data));
    },[])

    return (
        <div>
            {todos.map(todo => <Todo key={todo.id} todo={todo}/>)}
        </div>
    );
};

export {
    Todos,
};