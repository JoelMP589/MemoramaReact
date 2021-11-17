import React, { useContext } from 'react'
import { MemoramaContext } from '../context/MemoramaContext';


export const Pregunta = (props) => {
    const { sendAnswersToFirebase, sendNegativeAnswersToFirebase } = useContext(MemoramaContext);

    return (
        <div className="contenedor">
            <img className="fondo-imagen" src={'/assets/Fondo_encuesta.png'} alt="fondo" />
            <div className="contenedor-imagen">
                <img src={`assets/Modal_pregunta${props.num}.png`} alt={`pregunta${props.num}`} className="Modal-imagen" />
                <div className="Modal-contenedor-botones">
                    <img src='assets/boton_si.png' alt="si" onClick={() => {
                        sendAnswersToFirebase(`pregunta${props.num}`);
                        props.nextStep();
                    }} className="Modal-boton Modal-botones" />
                    <img src='assets/boton_no.png' alt="no" onClick={() => {
                        sendNegativeAnswersToFirebase(`pregunta${props.num}`);
                        props.nextStep();
                    }} className="Modal-boton Modal-botones" />
                </div>
            </div>
        </div>
    )
}
