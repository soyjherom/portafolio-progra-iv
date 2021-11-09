import './App.css'
import React from 'react'
import { UI } from './ui'

function useCookies(nombreCookie, contenidoCookie){
  const almacenamientoLocal = localStorage.getItem(nombreCookie)
  let elementoGuardado
  if(!almacenamientoLocal){
    //Serialization
    const elementoSerializado = JSON.stringify(contenidoCookie)
    localStorage.setItem(nombreCookie, elementoSerializado)
    elementoGuardado = contenidoCookie
  }else{
    // Deserialization
    elementoGuardado = JSON.parse(almacenamientoLocal) 
  }
  const [elemento, setElemento] = React.useState(elementoGuardado)
  const guardar = (elementos) =>{
    if(elementos.length <= 0){
      localStorage.removeItem(nombreCookie)
    }else{
      const elementosSerializados = JSON.stringify(elementos)
      localStorage.setItem(nombreCookie, elementosSerializados)
    }
  }
  return [elemento, setElemento]
}

function App() {
  const tareasDefault = [
    {texto: "Tarea 1 XX", completada: false},
    {texto: "Tarea 2 XX", completada: false},
    {texto: "Tarea 3", completada: true}
  ]
  const miListaTareas = 'MI_LISTA_TAREAS'

  //Uso de custom hooks
  const[tareas, guardar] = useCookies(miListaTareas, tareasDefault)
  
  //Hooks de React para interactuar con el DOM
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

  const completar = (texto) =>{
    const indice = tareas.findIndex(tarea => tarea.texto == texto)
    const nuevaLista = [...tareas]
    nuevaLista[indice].completada = !nuevaLista[indice].completada
    guardar(nuevaLista)
  }

  const borrar = (texto) =>{
    const indice = tareas.findIndex(tarea => tarea.texto == texto)
    const nuevaLista = [...tareas]
    nuevaLista.splice(indice, 1)
    guardar(nuevaLista)
  }

  const nombreAutorCookie = 'NOMBRE_AUTOR'
  const nombreAutorValor = 'JANE DOE'
  const[nombreDelAutor, guardarAutor] = useCookies(nombreAutorCookie, nombreAutorValor)

  return (
     <UI
     tareasCompletadas={tareasCompletadas}
     totalTareas={totalTareas}
     valorBuscado={valorBuscado}
     buscarTarea={buscarTarea}
     tareasBuscadas={tareasBuscadas}
     completar={completar}
     borrar={borrar}
     nombreDelAutor={nombreDelAutor}
     />
  )
}

export default App;
