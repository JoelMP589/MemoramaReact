import React, { useEffect, useState } from 'react'
import { Board } from './components/Board'
const emojiList = [...'🤡🧠🦾🦷🫀🦴🫁🤬']

export const App = () => {
  const [randomBlocks, setRandomBlocks] = useState([]);
  const [selectBlock, setSelectBlock] = useState(null);
  const [animating, setAnimating] = useState(false);
  const [selectBlockAdicional, setSelectBlockAdicional] = useState(null);
  const [bandera, setBandera] = useState(false);

  useEffect(() => {
    const randomEmojiLis = revolverArray([...emojiList, ...emojiList, ...emojiList])
    setRandomBlocks(randomEmojiLis.map((emoji, i) => ({ index: i, emoji, flipped: false })))
  }, [])

  const revolverArray = a => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  const handleBlockClick = block => {
    const flippedBlock = { ...block, flipped: true }
    let randomBlocksCopy = [...randomBlocks];
    randomBlocksCopy.splice(block.index, 1, flippedBlock);
    setRandomBlocks(randomBlocksCopy);
    if (selectBlock === null && bandera === false) {
      setSelectBlock(block);
    } else if (selectBlock.emoji === block.emoji && bandera === false) {
      setSelectBlockAdicional(block);
      setBandera(true);
    } else if (bandera) {
      if (selectBlockAdicional.emoji === block.emoji && selectBlock.emoji === block.emoji) {
        setSelectBlockAdicional(null);
        setSelectBlock(null);
        setBandera(false);
      } else {
        setAnimating(true);
        setTimeout(() => {
          randomBlocksCopy.splice(block.index, 1, block);
          randomBlocksCopy.splice(selectBlock.index, 1, selectBlock);
          randomBlocksCopy.splice(selectBlockAdicional.index, 1, selectBlockAdicional);
          setRandomBlocks(randomBlocksCopy);
          setSelectBlock(null);
          setSelectBlockAdicional(null);
          setBandera(false);
          setAnimating(false)
        }, 500);
      }
    }
    else {
      setAnimating(true);
      setTimeout(() => {
        randomBlocksCopy.splice(block.index, 1, block);
        randomBlocksCopy.splice(selectBlock.index, 1, selectBlock);
        setRandomBlocks(randomBlocksCopy);
        setSelectBlock(null);
        setSelectBlockAdicional(null);
        setBandera(false);
        setAnimating(false)
      }, 500);
    }
  }

  return (
    <Board Blocks={randomBlocks} animating={animating} handleBlockClick={handleBlockClick} />
  )
}
