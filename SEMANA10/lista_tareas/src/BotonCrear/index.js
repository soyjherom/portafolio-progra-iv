import React from 'react'
import './BotonCrear.css'

function BotonCrear(props){
    const onClickButton = () =>{
       alert("clic!")
    }
    return(
        <button 
            className="BotonCrear"
            onClick={() => onClickButton(
                "Clickado!"
            )}
        >+
        </button>
    )
}

export { BotonCrear }