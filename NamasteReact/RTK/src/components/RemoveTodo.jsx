import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../utilis/Slice';

const RemoveTodo = () => {
  
    const todos = useSelector(state => state.todos); 
    const dispatch = useDispatch();

    if (todos.length === 0) {
        return <p>No tasks yet! Add one above.</p>;
    }

    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>
                    <span>{todo.text}</span> 
                    <button onClick={() => dispatch(removeTodo(todo.id))}>
                        Remove
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default RemoveTodo;