import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../utilis/Slice'; 

const AddTodo = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const handleTodo = (e) => {
        e.preventDefault(); 
        
        
        if (input.trim() === '') return;

        dispatch(addTodo(input));
        setInput(''); 
    };

    return (
        <form onSubmit={handleTodo}>
            <h1>Learning RTK with todo</h1>
            <input 
                type="text" 
                placeholder='Add your todo' 
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default AddTodo;