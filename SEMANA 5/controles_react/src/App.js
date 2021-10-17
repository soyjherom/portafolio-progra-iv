import logo from './logo.svg';
import './App.css';
// Esta sintaxis similar a HTML dentro de codigo Javascript se llama JSX
// En JSX usamos className en lugar de class para diferenciar
// las clases de JSX con las clases de HTML. Las clases de HTML
// son aquellas a las que se referencia usando className

// Los componentes se definen como funciones
// Estos componentes pueden recibir como parametros dentro de props
// todo lo que se envie desde el index.js
function App(props) {
  return (
    <div className="App" id="root">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenido a React JS
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.nombre} {/*Y asi es como usamos las propiedades de entrada en props*/} 
        </a>
      </header>
    </div>
  );
}

export default App;
