import React from 'react';
import './CreateTodoButton.css'
function CreateTodoButton(props){
    return(
        <button 
            className="CreateTodoButton"
            onClick={props.crearTarea}
        >+</button>
    );
}
export {CreateTodoButton};