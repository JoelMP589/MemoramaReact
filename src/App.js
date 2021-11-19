import { useEffect, useState } from 'react'
import StepWizard from "react-step-wizard";
import { Cierre } from './components/Cierre';
import { Instrucciones } from './components/Instrucciones';
import { Perdedor } from './components/Perdedor';
import { Pregunta } from './components/Pregunta';
/* import { Memorama } from './components/Memorama'; */
import { Tablero } from './components/Tablero';

export const App = () => {
  const [screenIsOnLandscape, setScreenIsOnLandscape] = useState(false);
  function isLandscape() {
    const isLandscape = window.innerHeight < window.innerWidth;
    if (isLandscape) {
      setScreenIsOnLandscape(true);
    } else {
      setScreenIsOnLandscape(false);
    }
  }
  window.addEventListener("resize", isLandscape)

  useEffect(() => {
    isLandscape();
  }, []);

  let noTransitions = {
    enterRight: '',
    enterLeft: '',
    exitRight: '',
    exitLeft: ''
  };

  if (screenIsOnLandscape) {
    return (
      <>
        <StepWizard isLazyMount={true} transitions={noTransitions}>
          <Instrucciones />
          <Tablero nivel={0} />
          <Tablero nivel={1} />
          <Tablero nivel={2} />
          <Tablero nivel={3} />
          <Tablero nivel={4} />
          <Tablero nivel={5} />
          <Tablero nivel={6} />
          <Tablero nivel={7} />
          <Tablero nivel={8} />
          <Tablero nivel={9} />
          <Perdedor />
          <Pregunta num={1} />
          <Pregunta num={2} />
          <Cierre />
        </StepWizard>
      </>
    );
  } else {
    return (
      <div
      >
        <h4>
          OOPS!
          <p></p>
          FAVOR DE ROTAR SU DISPOSITIVO PARA PODER DISFRUTAR DE ESTE RETO
        </h4>
      </div>
    )
  }
}
