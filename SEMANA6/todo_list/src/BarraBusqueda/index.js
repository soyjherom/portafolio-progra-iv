import React from 'react';
import './TodoSearch.css'
function TodoSearch({valorBuscado, funcionBuscar}){
    const buscar = (event) =>{
        funcionBuscar(event.target.value);
    }
    // React solamente permite devolver un elemento. 
    // Si queremos devolver varios elementos podemos crearlos dentro de un contenedor
    // O tambien podemos crear un arreglo de elementos cambiando el () por [] en el return
    // y separando cada elemento con una coma
    return[
        <input 
            className="TodoSearch" 
            placeholder="Algo que hacer"
            value={valorBuscado}
            onChange={buscar}
        />,
        <p>{valorBuscado}</p>
    ];
}
export { TodoSearch };