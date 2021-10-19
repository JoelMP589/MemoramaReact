import React, { useEffect, useState } from 'react'
import { Board } from './components/Board'
const emojiList = [...'🤡🧠🦾🦷🫀🦴🫁🤬']

export const App = () => {
  const [randomBlocks, setRandomBlocks] = useState([]);
  const [selectBlock, setSelectBlock] = useState(null);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const randomEmojiLis = revolverArray([...emojiList, ...emojiList, ...emojiList])
    setRandomBlocks(randomEmojiLis.map((emoji, i) => ({ index: i, emoji, flipped: false })))
  }, [])

  const revolverArray = a => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    console.log(a);
    return a;
  }

  const handleBlockClick = block => {
    console.log("entro");
    const flippedBlock = { ...block, flipped: true }
    let randomBlocksCopy = [...randomBlocks];
    randomBlocksCopy.splice(block.index, 1, flippedBlock);
    setRandomBlocks(randomBlocksCopy);
    if (selectBlock === null) {
      setSelectBlock(block);
    } else if (selectBlock.emoji === block.emoji) {
      setSelectBlock(null);
    } else {
      setAnimating(true);
      setTimeout(() => {
        randomBlocksCopy.splice(block.index, 1, block);
        randomBlocksCopy.splice(selectBlock.index, 1, selectBlock)
        setRandomBlocks(randomBlocksCopy);
        setSelectBlock(null);
        setAnimating(false)
      }, 1000);
    }
  }

  return (
    <Board Blocks={randomBlocks} animating={animating} handleBlockClick={handleBlockClick} />
  )
}
