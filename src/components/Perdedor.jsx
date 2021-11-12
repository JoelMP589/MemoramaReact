import React from 'react'

export const Perdedor = (props) => {
    return (
        <div className="contenedor">
            <img className="fondo-imagen" src={'/assets/Fondo_n10.png'} alt="fondo" />
            <div className="contenedor-imagen">
                <img src='assets/Modal_perdiste.png' alt="Perdiste" className="Modal-imagen" />
                <img onClick={props.nextStep} src='/assets/boton_encuesta.png' alt="Encuesta" className="Modal-boton Modal-boton-derecha" />
            </div>
        </div>
    )
}
