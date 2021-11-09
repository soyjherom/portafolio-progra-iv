import React from 'react'
import './App.css'
import { TodoCounter } from '../Encabezado/'
import { TodoSearch } from '../BarraBusqueda/'
import { CreateTodoButton } from '../BotonCrearTarea/'
import { TodoList } from '../ListaTareas/'
import { TodoItem } from '../Tarea/'

//Vamos a crear tres componentes
//TodoCounter
//TodoSearch
//TodoList
//Todos los componentes son nombres propios, por ende su primera letra en mayuscula
function App() {
  // localStorage.removeItem('TAREAS_JSON')
  const tareasPorDefecto = [
    {description: 'Algo por hacer 1',completed: false},
    {description: 'Algo por hacer 2',completed: false},
    {description: 'Algo por hacer 3',completed: false},
    {description: 'Algo por hacer 4',completed: false}
  ]
  const almacenamientoLocalDeTareas = localStorage.getItem('TAREAS_JSON')
  let tareasParseadas
  if(!almacenamientoLocalDeTareas){
    localStorage.setItem('TAREAS_JSON', JSON.stringify(tareasPorDefecto))
    tareasParseadas = tareasPorDefecto
  }else{
    tareasParseadas = JSON.parse(almacenamientoLocalDeTareas)
  }

  const[todos, setTodos] = React.useState(tareasParseadas);
  const [valorBuscado, funcionBuscar] = React.useState(''); //React Hooks
  const tareasCumplidas = todos.filter(todo => todo.completed).length
  const totalTareas = todos.length
  
  let tareasBuscadas = [];
  if(valorBuscado.length<=0){
    tareasBuscadas = todos
  }else{
    tareasBuscadas = todos.filter(todo => {
      const descripcionTarea = todo.description.toLowerCase()
      const descripcionBuscada = valorBuscado.toLowerCase()
      return descripcionTarea.includes(descripcionBuscada)
    })
  }

  const completarTarea = (texto) =>{
    const indiceTarea = todos.findIndex(todo => todo.description == texto)
    const nuevaListaTareas = [...todos]
    nuevaListaTareas[indiceTarea].completed = !nuevaListaTareas[indiceTarea].completed
    salvarTareas(nuevaListaTareas)
    setTodos(nuevaListaTareas)
  }

  const borrarTarea = (texto) =>{
    const indice = todos.findIndex(todo => todo.description == texto)
    const tareaPorEliminar = todos[indice]
    const nuevaListaTareas = [...todos]
    nuevaListaTareas.pop(tareaPorEliminar)
    salvarTareas(nuevaListaTareas)
    setTodos(nuevaListaTareas)
  }

  const salvarTareas=(tareas) =>{
    if(tareas.length <= 0){
      localStorage.removeItem('TAREAS_JSON')
    }else{
      const tareasSerializadas = JSON.stringify(tareas)
      localStorage.setItem('TAREAS_JSON', tareasSerializadas)
    }
  }

  return (
    <React.Fragment>
      <TodoCounter 
        tareasCumplidas={tareasCumplidas}
        totalTareas={totalTareas}
      />
      <TodoSearch
        valorBuscado={valorBuscado}
        funcionBuscar={funcionBuscar}
      />      
      <TodoList>
        {tareasBuscadas.map(todo=>(
            <TodoItem 
              key={todo.description} 
              text={todo.description}
              completed={todo.completed}
              onComplete={() => completarTarea(todo.description)}
              onDelete={() => borrarTarea(todo.description)}
            />
        ))}
      </TodoList>
      <CreateTodoButton
      />
    </React.Fragment>
  );
}

export default App;
