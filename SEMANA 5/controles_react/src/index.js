import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
ReactDOM.render(
    <App nombre="Jherom"/>, // Asi es como enviamos propiedades dentro de nuestro componente
  document.getElementById('root')
);
/*
Tambien podemos enviar a nuestro componente elementos hijos o childs 
que se comporten como HTML insertado
ReactDOM.render(
    <App nombre="Jherom">
      <h1>Bienvenido a React JS</h1>
    </App>, // Asi es como enviamos propiedades dentro de nuestro componente
  document.getElementById('root')
);
*/
reportWebVitals();
