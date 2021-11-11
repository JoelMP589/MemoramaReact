import React, { useContext, useEffect } from 'react'
import { MemoramaContext } from '../context/MemoramaContext'
import '../css/Tablero.css'
import { Board } from './Board'

export const Tablero = () => {
    const { obtenerTablero, /* timerKey, timer, date, setTimerKey, setDate, setImagenList */ } = useContext(MemoramaContext)
    useEffect(() => {
        obtenerTablero();
        // eslint-disable-next-line
    }, [])
    return (
        <div className="contenedor-tablero">
            <img className="fondo-imagen" src={`/assets/Fondo_n${1}.png`} alt="fondo" />
            <img className="nivel" src={`/assets/Nivel_${1}.png`} alt="nivel" />
            <div className="tiempo-contenedor">
                <img className="tiempo-Img" src={`/assets/verde.png`} alt="tiempo" />
                <p className="tiempo">15</p>
            </div>
            <Board />
        </div>
    )
}
