import React from 'react'

export const Pregunta = (props) => {
    return (
        <div className="contenedor">
            <img className="fondo-imagen" src={'/assets/Fondo_encuesta.png'} alt="fondo" />
            <div className="contenedor-imagen">
                <img src={`assets/Modal_pregunta${props.num}.png`} alt={`pregunta${props.num}`} className="Modal-imagen" />
                <div className="Modal-contenedor-botones">
                    <img src='assets/boton_si.png' alt="si" onClick={props.nextStep} className="Modal-boton Modal-botones" />
                    <img src='assets/boton_no.png' alt="no" className="Modal-boton Modal-botones" />
                </div>
            </div>
        </div>
    )
}
