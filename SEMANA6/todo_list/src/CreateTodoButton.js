import React from 'react';
import './CreateTodoButton.css'
function CreateTodoButton(props){
    return(
        <button 
            className="CreateTodoButton"
            onClick={() => alert('Hola mundo')}
        >+</button>
    );
}
export {CreateTodoButton};