import React from 'react'
import '../css/Instrucciones.css'

export const Instrucciones = (props) => {
    return (
        <div className="contenedor">
            <img className="fondo-imagen" src={'/assets/Fondo_encuesta.png'} alt="fondo" />
            <div className="contenedor-imagen">
                <img src='assets/Modal_inicio.png' alt="instrucciones" className="Modal-imagen" />
                <img onClick={props.nextStep} src='/assets/boton_comenzar.png' alt="Comenzar" className="Modal-boton" />
            </div>
        </div>
    )
}
