import React from 'react';
import './TodoCounter.css';
function TodoCounter({tareasCumplidas, totalTareas}){
    return (
        <h2 className="TodoCounter">
            Has completado {tareasCumplidas} de {totalTareas} tareas
        </h2>
    );
}
export { TodoCounter };