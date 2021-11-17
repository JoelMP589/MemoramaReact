import { createContext, useState } from 'react'
import firebase from 'firebase/compat/app';
import "firebase/compat/firestore";
import useSound from 'use-sound';
import error from '../assets/error.mp3';
import success from '../assets/acierto.mp3';

firebase.initializeApp({
    apiKey: "AIzaSyBPRp4xTpCcaUagaA5P_YBFsqyWc3_H-u0",
    authDomain: "realtimetest-54cdd.firebaseapp.com",
    projectId: "realtimetest-54cdd",
    storageBucket: "realtimetest-54cdd.appspot.com",
    messagingSenderId: "740465626710",
    appId: "1:740465626710:web:0a69deffa710515d4b35f7",
    measurementId: "G-L0KYEFY7F8"
})

const firestore = firebase.firestore();

export const MemoramaContext = createContext();

export const MemoramaProvider = ({ children }) => {
    const [playLost] = useSound(error);
    const [playWin] = useSound(success);
    const memoramaRef = firestore.collection("Memorama");
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
                    playWin();
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
                    playLost();
                }, 500);
            }
        } else {
            if (selectBlock === null) {
                setSelectBlock(block);
            } else if (selectBlock.imagen === block.imagen) {
                setSelectBlock(null);
                playWin();
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
                    playLost();
                }, 500);
            }
        }
    }

    const timer = ({ seconds }) => {
        return (
            <>
                <p className="tiempo">
                    {seconds} </p>
                <img className="tiempo-Img" src={seconds > 10 ? `/assets/verde.png` : seconds > 6 ? `/assets/amarillo.png` : `/assets/rojo.png`} alt="tiempo" />
            </>
        );
    };

    const sendMessageToFirebase = async (documento) => {
        const increment = firebase.firestore.FieldValue.increment(1);
        await memoramaRef.doc(documento).set({
            Total: increment
        },
            { merge: true });
    }

    const sendAnswersToFirebase = async (documento) => {
        const increment = firebase.firestore.FieldValue.increment(1);
        await memoramaRef.doc(documento).set({
            Si: increment
        },
            { merge: true });
    }

    const sendNegativeAnswersToFirebase = async (documento) => {
        const increment = firebase.firestore.FieldValue.increment(1);
        await memoramaRef.doc(documento).set({
            No: increment
        },
            { merge: true });
    }

    return (
        <MemoramaContext.Provider value={{
            randomBlocks,
            animating,
            timerKey,
            date,
            sendMessageToFirebase,
            sendAnswersToFirebase,
            sendNegativeAnswersToFirebase,
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