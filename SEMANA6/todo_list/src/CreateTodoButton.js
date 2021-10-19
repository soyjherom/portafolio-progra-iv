import React from 'react';
import './CreateTodoButton.css'
function CreateTodoButton(props){
    const onClickButton = () => {
        alert("Hola mundo")
    }
    return(
        <button 
            className="CreateTodoButton"
            onClick={onClickButton}
        >+</button>
    );
}
export {CreateTodoButton};