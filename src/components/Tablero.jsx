import React, { useContext, useEffect } from 'react'
import { MemoramaContext } from '../context/MemoramaContext'
import '../css/Tablero.css'
import { Board } from './Board'
import Countdown from 'react-countdown';

export const Tablero = (props) => {
    const { obtenerTablero, timerKey, timer, date, setDate, setTimerKey } = useContext(MemoramaContext)
    useEffect(() => {
        obtenerTablero(props.nivel);
        // eslint-disable-next-line
    }, [props.nivel])
    const next = () => {
        props.nextStep();
        setDate(Date.now() + 16000);
        setTimerKey(timerKey + 1);
    }
    return (
        <div className="contenedor-tablero">
            <img className="fondo-imagen" src={`/assets/Fondo_n${props.nivel + 1}.png`} alt="fondo" />
            <img className="nivel" src={`/assets/Nivel_${props.nivel + 1}.png`} alt="nivel" />
            <div className="tiempo-contenedor">
                <Countdown date={date}
                    intervalDelay={0}
                    precision={3}
                    key={timerKey}
                    renderer={timer}
                    onComplete={() => next()}
                />
            </div>
            <Board nivel={props.nivel} />
        </div>
    )
}
