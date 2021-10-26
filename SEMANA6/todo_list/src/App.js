import React from 'react';
import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
const todos = [
  {description: 'Algo por hacer 1',completed: true},
  {description: 'Algo por hacer 2',completed: false},
  {description: 'Algo por hacer 3',completed: false}
]
//Vamos a crear tres componentes
//TodoCounter
//TodoSearch
//TodoList
//Todos los componentes son nombres propios, por ende su primera letra en mayuscula
function App() {
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch/>      
      <TodoList>
        {todos.map(todo=>(
            <TodoItem 
              key={todo.description} 
              text={todo.description}
              completed={todo.completed}
            />
        ))}
      </TodoList>
      <CreateTodoButton/>
    </React.Fragment>
  );
}

export default App;
