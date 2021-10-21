import React, {useContext} from 'react'
import { MemoramaContext } from '../context/MemoramaContext'
import '../css/Block.css'

export const Block = ({block}) => {
    const {animating, handleBlockClick } = useContext(MemoramaContext)
    return (
        <div className="memo-block" onClick={()=>(!block.flipped && !animating) && handleBlockClick(block)}>
            <div className={`memo-block-inner ${block.flipped && 'memo-block-flipped'}`}>
                <div className="memo-block-front">
                </div>
                <div className="memo-block-back">
                    <img className="imagen" src={block.imagen} alt="someting"/>
                </div>
            </div>
        </div>
    )
}
