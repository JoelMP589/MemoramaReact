import React, { useContext } from 'react'
import { MemoramaContext } from '../context/MemoramaContext';
import '../css/Instrucciones.css'

export const Instrucciones = (props) => {

    const { setDate, setTimerKey, timerKey, sendMessageToFirebase } = useContext(MemoramaContext);

    const next = () => {
        props.nextStep();
        setDate(Date.now() + 16000);
        setTimerKey(timerKey + 1);
        sendMessageToFirebase("Jugadores");
    }

    return (
        <div className="contenedor">
            <img className="fondo-imagen" src={'/assets/Fondo_encuesta.png'} alt="fondo" />
            <div className="contenedor-imagen">
                <img src='assets/Modal_inicio.png' alt="instrucciones" className="Modal-imagen" />
                <img onClick={() => next()} src='/assets/boton_comenzar.png' alt="Comenzar" className="Modal-boton" />
            </div>
        </div>
    )
}
