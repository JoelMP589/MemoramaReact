import React from 'react'

export const Cierre = (props) => {
    const cerrar = () => {
        window.open("about:blank", "_self");
        window.close();
    }
    return (
        <div className="contenedor">
            <img className="fondo-imagen" src={'/assets/Fondo_encuesta.png'} alt="fondo" />
            <div className="contenedor-imagen">
                <img src='assets/Modal_cierre.png' alt="Cierre" className="Modal-imagen" />
                <img onClick={() => cerrar()} src='/assets/boton_cierre.png' alt="Cierre" className="Modal-boton Modal-boton-derecha" />
            </div>
        </div>
    )
}
