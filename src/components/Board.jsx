import React, { useContext, memo } from 'react'
import { Block } from './Block'
import '../css/Board.css'
import { MemoramaContext } from '../context/MemoramaContext';


export const Board = memo((props) => {
    const { randomBlocks } = useContext(MemoramaContext);
    return (
        <main className="board">
            {
                randomBlocks.map((block, i) => {
                    return <Block key={`${i}_${block.imagen}`} block={block} nivel={props.nivel} />
                })
            }
        </main>
    )
})
