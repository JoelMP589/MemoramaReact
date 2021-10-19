import React, { useEffect, useState } from 'react'
import { Board } from './components/Board'
//const imagenList = [...'🤡🧠🦾🦷🫀🦴🫁🤬']
const imagenList = ["https://img.icons8.com/color/48/000000/treatment-plan.png", "https://img.icons8.com/office/40/000000/tooth.png", "https://img.icons8.com/clouds/100/000000/stethoscope.png", "https://img.icons8.com/ios/50/000000/medical-doctor.png", "https://img.icons8.com/doodle/48/000000/pills.png", "https://img.icons8.com/bubbles/50/000000/lungs.png", "https://img.icons8.com/ios-filled/50/000000/xray.png", "https://img.icons8.com/fluency/48/000000/brain.png"]

export const App = () => {
  const [randomBlocks, setRandomBlocks] = useState([]);
  const [selectBlock, setSelectBlock] = useState(null);
  const [animating, setAnimating] = useState(false);
  const [selectBlockAdicional, setSelectBlockAdicional] = useState(null);
  const [bandera, setBandera] = useState(false);

  useEffect(() => {
    const randomImagenList = revolverArray([...imagenList, ...imagenList, ...imagenList])
    setRandomBlocks(randomImagenList.map((imagen, i) => ({ index: i, imagen, flipped: false })))
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
    } else if (selectBlock.imagen === block.imagen && bandera === false) {
      setSelectBlockAdicional(block);
      setBandera(true);
    } else if (bandera) {
      if (selectBlockAdicional.imagen === block.imagen && selectBlock.imagen === block.imagen) {
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
