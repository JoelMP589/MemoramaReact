import React, { useContext, useEffect } from 'react'
import { MemoramaContext } from '../context/MemoramaContext'
import '../css/Tablero.css'
import { Board } from './Board'

export const Tablero = (props) => {
    const { obtenerTablero, } = useContext(MemoramaContext)
    useEffect(() => {
        obtenerTablero(props.nivel);
        // eslint-disable-next-line
    }, [])
    return (
        <div className="contenedor-tablero">
            <img className="fondo-imagen" src={`/assets/Fondo_n${props.nivel + 1}.png`} alt="fondo" />
            <img className="nivel" src={`/assets/Nivel_${props.nivel + 1}.png`} alt="nivel" />
            <div className="tiempo-contenedor">
                <img className="tiempo-Img" onClick={props.nextStep} src={`/assets/verde.png`} alt="tiempo" />
                <p className="tiempo">15</p>
            </div>
            <Board />
        </div>
    )
}
