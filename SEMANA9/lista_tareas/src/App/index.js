import './App.css'
import React from 'react'
import { UI } from './ui'

const contenidoLista = [
  {texto: "Tarea 1 XX", completada: false},
  {texto: "Tarea 2 XX", completada: false},
  {texto: "Tarea 3", completada: true}
]
const nombreLista = 'MI_LISTA_TAREAS'

function useCookies(nombreCookie, contenidoCookie){
  const almacenamientoLocal = localStorage.getItem(nombreCookie)
  let elementoGuardado

  if(!almacenamientoLocal){
    //No hay una cookie guardada con el nombre dado
    const elementoSerializado = JSON.stringify(contenidoCookie)//Serialization
    localStorage.setItem(nombreCookie, elementoSerializado) //En esta linea se crea la cookie
    elementoGuardado = contenidoCookie //
  }else{
    //Existe una cookie con el nombre dado que ya tiene tareas
    elementoGuardado = JSON.parse(almacenamientoLocal) // Deserialization
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

function useSearch(tareas){
  //Hooks de React para interactuar con el DOM
  const [valorBuscado, buscarTarea] = React.useState('')

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

  return [valorBuscado, tareasBuscadas, buscarTarea]
}

function App() {
  //Uso de custom hooks
  const[tareas, guardar] = useCookies(nombreLista, contenidoLista)
  const[valorBuscado, tareasBuscadas, buscarTarea] = useSearch(tareas)

  const tareasCompletadas = tareas.filter(tarea => tarea.completada).length
  const totalTareas = tareas.length

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
