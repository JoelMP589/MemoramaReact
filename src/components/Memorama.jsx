import React, { useEffect, useState, useContext, forwardRef } from 'react'
import { Board } from './Board'
import { MemoramaContext } from '../context/MemoramaContext'
import Countdown from 'react-countdown';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export const Memorama = () => {
    const [modal, setModal] = useState(false);
    const [contador, setContador] = useState(1);
    const [mensaje, setMensaje] = useState();
    const { obtenerTablero, timerKey, timer, date, setTimerKey, setDate, setImagenList } = useContext(MemoramaContext)
    useEffect(() => {
        obtenerTablero();
        // eslint-disable-next-line
    }, [])


    const reiniciar = () => {
        setContador(prev => prev + 1)
        setDate(Date.now() + 15000)
        setTimerKey(timerKey + 1);
        obtenerTablero();
    }

    const handleSiguiente = () => {
        if (contador < 3) {
            reiniciar();
            setModal(false);
        } else {
            setModal(false)
        }
    };

    return (
        <>
            <Countdown date={date}
                intervalDelay={0}
                precision={3}
                key={timerKey}
                renderer={timer}
                onComplete={() => {
                    if (contador === 1) {
                        setMensaje("No te rindas!! casi lo tenias.")
                        setImagenList(["https://img.icons8.com/office/40/000000/hospital-wheel-bed.png", "https://img.icons8.com/office/40/000000/dialysis-machine.png", "https://img.icons8.com/office/40/000000/doctors-bag.png", "https://img.icons8.com/office/40/000000/medical-heart.png", "https://img.icons8.com/office/40/000000/fever.png", "https://img.icons8.com/color/48/000000/hospital-3.png", "https://img.icons8.com/color/48/000000/surgery.png", "https://img.icons8.com/color/96/000000/syringe.png"])
                    } else if (contador === 2) {
                        setMensaje("ultimo intento ¿listo?")
                        setImagenList(["https://img.icons8.com/office/40/000000/rod-of-asclepius.png", "https://img.icons8.com/office/40/000000/caduceus.png", "https://img.icons8.com/office/40/000000/hearing-aid.png", "https://img.icons8.com/office/40/000000/ambulance.png", "https://img.icons8.com/office/40/000000/protection-mask.png", "https://img.icons8.com/office/40/000000/nurse-male.png", "https://img.icons8.com/office/40/000000/virus.png", "https://img.icons8.com/office/40/000000/diabetes.png"])
                    }
                    setModal(true);
                }}
            />
            <span>{`${contador}/3`}</span>
            <Dialog
                open={modal}
                TransitionComponent={Transition}
                keepMounted
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"Perdiste :'C"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        {contador === 3 ? 'No lo pudiste terminar :C te dejo intentarlo en modo libre de momento...' : mensaje}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleSiguiente}>{contador === 3 ? 'Modo libre' : 'Siguiente'}</Button>
                </DialogActions>
            </Dialog>
            <Board />
        </>
    )
}
