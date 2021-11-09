import React from 'react';
import './TodoItem.css'
function TodoItem(props){
    const onComplete = () =>{}
    const onDelete = () =>{}
    return(
        <li className="TodoItem">
            <span 
                className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
                onClick={props.onComplete}
            >SI</span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                {props.text}
            </p>
            <span 
                className="Icon Icon-delete"
                onClick={props.onDelete}
            >BORRAR</span>
        </li>
    );
}
export {TodoItem};