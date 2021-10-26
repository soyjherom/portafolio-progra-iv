import React from 'react';
import './CreateTodoButton.css'
function CreateTodoButton(props){
    const onClickButton = (mensaje) => {
        alert(mensaje)
    }
    return(
        <button 
            className="CreateTodoButton"
            onClick={() => onClickButton("This is a parameter")}
        >+</button>
    );
}
export {CreateTodoButton};