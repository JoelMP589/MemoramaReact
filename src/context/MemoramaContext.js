import { createContext, useState } from 'react'

export const MemoramaContext = createContext();

export const MemoramaProvider = ({ children }) => {
    const [imagenList, setImagenList] = useState(
        [["assets/36.png", "assets/28.png", "assets/31.png", "assets/26.png", "assets/33.png", "assets/25.png", "assets/24.png", "assets/29.png", "assets/35.png", "assets/34.png",
            "assets/30.png", "assets/29.png", "assets/32.png", "assets/23.png", "assets/34.png", "assets/31.png", "assets/36.png", "assets/33.png", "assets/25.png",
            "assets/27.png", "assets/23.png", "assets/28.png", "assets/24.png", "assets/26.png", "assets/35.png", "assets/32.png", "assets/30.png",
            "assets/31.png", "assets/27.png",],
        ["assets/20.png", "assets/23.png", "assets/22.png", "assets/33.png", "assets/19.png", "assets/17.png", "assets/12.png", "assets/28.png", "assets/34.png", "assets/21.png", "assets/22.png", "assets/29.png", "assets/35.png", "assets/17.png", "assets/25.png", "assets/34.png",
            "assets/18.png", "assets/19.png", "assets/25.png", "assets/33.png", "assets/29.png", "assets/27.png", "assets/28.png", "assets/23.png", "assets/35.png", "assets/20.png", "assets/21.png",
            "assets/18.png", "assets/20.png",],
        ["assets/13.png", "assets/14.png", "assets/11.png", "assets/9.png", "assets/22.png", "assets/36.png", "assets/22.png", "assets/10.png", "assets/12.png",
            "assets/32.png", "assets/10.png", "assets/16.png", "assets/18.png", "assets/11.png", "assets/32.png", "assets/18.png", "assets/30.png", "assets/26.png",
            "assets/15.png", "assets/26.png", "assets/16.png", "assets/30.png", "assets/12.png", "assets/9.png", "assets/13.png", "assets/16.png", "assets/15.png",
            "assets/14.png", "assets/36.png",],
        ["assets/11.png", "assets/27.png", "assets/22.png", "assets/14.png", "assets/9.png", "assets/15.png", "assets/10.png", "assets/22.png", "assets/7.png",
            "assets/19.png", "assets/20.png", "assets/8.png", "assets/6.png", "assets/20.png", "assets/7.png", "assets/11.png", "assets/27.png", "assets/17.png",
            "assets/19.png", "assets/10.png", "assets/15.png", "assets/9.png", "assets/11.png", "assets/8.png", "assets/18.png", "assets/14.png", "assets/6.png",
            "assets/18.png", "assets/17.png",],
        ["assets/13.png", "assets/14.png", "assets/9.png", "assets/7.png", "assets/2.png", "assets/4.png", "assets/26.png", "assets/9.png", "assets/16.png",
            "assets/3.png", "assets/2.png", "assets/10.png", "assets/26.png", "assets/3.png", "assets/5.png", "assets/7.png", "assets/15.png", "assets/6.png",
            "assets/6.png", "assets/5.png", "assets/7.png", "assets/16.png", "assets/1.png", "assets/15.png", "assets/13.png", "assets/10.png", "assets/1.png",
            "assets/4.png", "assets/14.png",],
        ["assets/29.png", "assets/27.png", "assets/33.png", "assets/34.png", "assets/30.png", "assets/23.png", "assets/25.png", "assets/35.png", "assets/26.png",
            "assets/32.png", "assets/31.png", "assets/36.png", "assets/35.png", "assets/32.png", "assets/27.png", "assets/33.png", "assets/36.png", "assets/28.png",
            "assets/24.png", "assets/28.png", "assets/30.png", "assets/25.png", "assets/34.png", "assets/31.png", "assets/29.png", "assets/26.png", "assets/24.png",
            "assets/33.png", "assets/23.png",],
        ["assets/34.png", "assets/25.png", "assets/29.png", "assets/35.png", "assets/20.png", "assets/23.png", "assets/25.png", "assets/21.png", "assets/27.png",
            "assets/17.png", "assets/33.png", "assets/19.png", "assets/24.png", "assets/27.png", "assets/24.png", "assets/18.png", "assets/19.png", "assets/28.png", "assets/23.png",
            "assets/18.png", "assets/29.png", "assets/28.png", "assets/34.png", "assets/33.png", "assets/35.png", "assets/17.png", "assets/21.png",
            "assets/20.png", "assets/17.png",],
        ["assets/16.png", "assets/15.png", "assets/10.png", "assets/13.png", "assets/30.png", "assets/18.png", "assets/12.png", "assets/14.png", "assets/15.png",
            "assets/14.png", "assets/18.png", "assets/22.png", "assets/11.png", "assets/26.png", "assets/36.png", "assets/13.png", "assets/10.png", "assets/9.png",
            "assets/26.png", "assets/36.png", "assets/32.png", "assets/12.png", "assets/11.png", "assets/32.png", "assets/16.png", "assets/30.png", "assets/22.png",
            "assets/13.png", "assets/9.png",],
        ["assets/6.png", "assets/9.png", "assets/27.png", "assets/17.png", "assets/10.png", "assets/11.png", "assets/21.png", "assets/19.png", "assets/10.png",
            "assets/20.png", "assets/18.png", "assets/14.png", "assets/27.png", "assets/7.png", "assets/14.png", "assets/20.png", "assets/18.png", "assets/7.png",
            "assets/8.png", "assets/17.png", "assets/15.png", "assets/21.png", "assets/8.png", "assets/9.png", "assets/6.png", "assets/11.png", "assets/19.png",
            "assets/6.png", "assets/15.png",],
        ["assets/9.png", "assets/3.png", "assets/2.png", "assets/7.png", "assets/6.png", "assets/1.png", "assets/15.png", "assets/14.png", "assets/13.png",
            "assets/26.png", "assets/6.png", "assets/1.png", "assets/5.png", "assets/13.png", "assets/9.png", "assets/2.png", "assets/10.png", "assets/7.png",
            "assets/4.png", "assets/16.png", "assets/2.png", "assets/14.png", "assets/10.png", "assets/4.png", "assets/16.png", "assets/15.png", "assets/5.png",
            "assets/26.png", "assets/3.png",]
        ]);

    const [respuestas] = useState(["assets/31.png", "assets/20.png", "assets/16.png", "assets/11.png", "assets/.png",
        "assets/33.png", "assets/17.png", "assets/13.png", "assets/6.png", "assets/2.png"]);

    const [randomBlocks, setRandomBlocks] = useState([]);
    const [selectBlock, setSelectBlock] = useState(null);
    const [timerKey, setTimerKey] = useState(0)
    const [date, setDate] = useState(0);
    const [animating, setAnimating] = useState(false);
    const [selectBlockAdicional, setSelectBlockAdicional] = useState(null);
    const [bandera, setBandera] = useState(false);


    const obtenerTablero = (nivel) => {
        /* const randomImagenList = [...imagenList, ...imagenList, ...imagenList] */
        setRandomBlocks(imagenList[nivel].map((imagen, i) => ({ index: i, imagen, flipped: false })))

    }

    /* const revolverArray = a => {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    } */

    const handleBlockClick = (block, nivel) => {
        const flippedBlock = { ...block, flipped: true }
        let randomBlocksCopy = [...randomBlocks];
        randomBlocksCopy.splice(block.index, 1, flippedBlock);
        setRandomBlocks(randomBlocksCopy);
        if (block.imagen === respuestas[nivel]) {
            console.log("entro a tres");
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
        } else {
            console.log("entro a solo dos");
            if (selectBlock === null) {
                setSelectBlock(block);
            } else if (selectBlock.imagen === block.imagen) {
                setSelectBlock(null);

            } else {
                setAnimating(true);
                setTimeout(() => {
                    if (selectBlockAdicional) {
                        randomBlocksCopy.splice(selectBlockAdicional.index, 1, selectBlockAdicional);
                        setSelectBlockAdicional(null);
                        setBandera(false);
                    }
                    randomBlocksCopy.splice(block.index, 1, block);
                    randomBlocksCopy.splice(selectBlock.index, 1, selectBlock)
                    setRandomBlocks(randomBlocksCopy);
                    setSelectBlock(null);
                    setAnimating(false)
                }, 500);
            }
        }
    }

    const timer = ({ seconds }) => {
        return (
            <>
                <p className="tiempo">
                    {seconds} </p>
                <img className="tiempo-Img" src={seconds > 10 ? `/assets/verde.png` : seconds > 5 ? `/assets/amarillo.png` : `/assets/rojo.png`} alt="tiempo" />
            </>
        );
    };

    return (
        <MemoramaContext.Provider value={{
            randomBlocks,
            animating,
            timerKey,
            date,

            setDate,
            timer,
            setTimerKey,
            handleBlockClick,
            setImagenList,
            obtenerTablero
        }}>
            {children}
        </MemoramaContext.Provider>
    )
}