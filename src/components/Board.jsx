import React from 'react'
import { Block } from './Block'
import '../css/Board.css'


export const Board = ({Blocks, animating, handleBlockClick}) => {
    return (
        <main className="board">
            {
                Blocks.map( (block, i) =>{
                    return <Block key={`${i}_${block.emoji}`} animating={animating} handleBlockClick={handleBlockClick} block={block}/>
                })
            }
        </main>
    )
}
