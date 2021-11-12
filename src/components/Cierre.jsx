import React from 'react'

export const Cierre = (props) => {
    return (
        <div className="contenedor">
            <img className="fondo-imagen" src={'/assets/Fondo_encuesta.png'} alt="fondo" />
            <div className="contenedor-imagen">
                <img src='assets/Modal_cierre.png' alt="Cierre" className="Modal-imagen" />
                <img onClick={props.nextStep} src='/assets/boton_cierre.png' alt="Cierre" className="Modal-boton Modal-boton-derecha" />
            </div>
        </div>
    )
}
