import React, { useContext, memo } from 'react'
import { MemoramaContext } from '../context/MemoramaContext'
import '../css/Block.css'

export const Block = memo(({ block, nivel }) => {
    const { animating, handleBlockClick } = useContext(MemoramaContext)
    return (
        <div className="memo-block" onClick={() => (!block.flipped && !animating) && handleBlockClick(block, nivel)}>
            <div className={`memo-block-inner ${block.flipped && 'memo-block-flipped'}`}>
                <div className="memo-block-front">
                    <img className="imagen" src='/assets/0.png' alt="someting" />
                </div>
                <div className="memo-block-back">
                    <img className="imagen" src={block.imagen} alt="someting" />
                </div>
            </div>
        </div>
    )
})
