import { useEffect, useState } from 'react'
import StepWizard from "react-step-wizard";
import { Instrucciones } from './components/Instrucciones';
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

  if (screenIsOnLandscape) {
    return (
      <>
        <StepWizard isLazyMount={true}>
          <Instrucciones />
          <Tablero />
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
