import React from 'react'
import '../css/Block.css'

export const Block = ({block, animating, handleBlockClick}) => {
    return (
        <div className="memo-block" onClick={()=>(!block.flipped && !animating) && handleBlockClick(block)}>
            <div className={`memo-block-inner ${block.flipped && 'memo-block-flipped'}`}>
                <div className="memo-block-front">
                </div>
                <div className="memo-block-back">
                    {block.emoji}
                </div>
            </div>
            
        </div>
    )
}
