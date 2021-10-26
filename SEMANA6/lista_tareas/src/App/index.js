import './App.css'
import React from 'react'
import { Encabezado } from '../Encabezado/'
import { BarraBusqueda } from '../BarraBusqueda/'
import { ListaTareas } from '../ListaTareas/'
import { Tarea } from '../Tarea/'


function App() {
  const tareasDefault = [
    {texto: "Tarea 1 XX", completada: false},
    {texto: "Tarea 2 XX", completada: false},
    {texto: "Tarea 3", completada: true}
  ]

  const miListaTareas = 'MI_LISTA_TAREAS'
  const almacenamientoLocal = localStorage.getItem(miListaTareas)
  let tareasGuardadas
  if(!almacenamientoLocal){
    const tareasSerializadas = JSON.stringify(tareasDefault)
    localStorage.setItem(miListaTareas, tareasSerializadas)
    tareasGuardadas = tareasDefault
  }else{
    tareasGuardadas = JSON.parse(almacenamientoLocal)
  }
  
  //Hooks de React para interactuar con el DOM
  const[tareas, setTareas] = React.useState(tareasGuardadas)
  const [valorBuscado, buscarTarea] = React.useState('')

  const tareasCompletadas = tareas.filter(tarea => tarea.completada).length
  const totalTareas = tareas.length

  //Comportamiento de busqueda
  let tareasBuscadas = []
  if(valorBuscado.length<=0){
    tareasBuscadas = tareas
  }else{
    tareasBuscadas = tareas.filter(
      tarea => {
        const textoTarea = tarea.texto.toLowerCase()
        const textoBuscado = valorBuscado.toLowerCase()
        return textoTarea.includes(textoBuscado)
      }
    )
  }

  const guardar = (tareas)=>{
    if(tareas.length <=0){
      localStorage.removeItem(miListaTareas)
    }else{
      const nuevasTareas = JSON.stringify(tareas)
      localStorage.setItem(miListaTareas, nuevasTareas)
    }
  }

  const completar = (texto) =>{
    const indice = tareas.findIndex(tarea => tarea.texto == texto)
    const nuevaLista = [...tareas]
    nuevaLista[indice].completada = !nuevaLista[indice].completada
    guardar(nuevaLista)
    setTareas(nuevaLista)
  }

  const borrar = (texto) =>{
    const indice = tareas.findIndex(tarea => tarea.texto == texto)
    const nuevaLista = [...tareas]
    nuevaLista.splice(indice, 1)
    guardar(nuevaLista)
    setTareas(nuevaLista)
  }

  return (
    <React.Fragment>
      <Encabezado
        completadas={tareasCompletadas}
        total={totalTareas}
      />
      <BarraBusqueda
        valorBusqueda={valorBuscado}
        funcionBuscar={buscarTarea}
      />
      <ListaTareas>
        {tareasBuscadas.map(tarea =>(
          <Tarea
            texto={tarea.texto}
            completada={tarea.completada}
            onComplete={()=>completar(tarea.texto)}
            onDelete={()=>borrar(tarea.texto)}
          />
        ))}
      </ListaTareas>
    </React.Fragment> 
  )
}

export default App;
