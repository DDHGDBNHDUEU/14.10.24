import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Feedback from './Feedback';

function Game() {
  const location = useLocation();
  const nombreJugador = location.state?.playerName || 'Jugador';
  const [numeroAleatorio, setNumeroAleatorio] = useState(null);
  const [adivinanza, setAdivinanza] = useState('');
  const [mensajeFeedback, setmensajeFeedback] = useState('');
  const [intentos, setIntentos] = useState(0);
  const [esCorrecto, setEsCorrecto] = useState(false);

  useEffect(() => {
    setNumeroAleatorio(Math.floor(Math.random() * 100) + 1);
  }, []);

  const manejarAdivinanza = () => {
    const numeroIngresado = parseInt(adivinanza, 10);
    if (isNaN(numeroIngresado)) {
      setmensajeFeedback('Ingresa un número válido');
      return;
    }

    setIntentos(intentos + 1);
    if (numeroIngresado < numeroAleatorio) {
      setmensajeFeedback('Muy bajo prueba con otro numero');
    } else if (numeroIngresado > numeroAleatorio) {
      setmensajeFeedback('Muy alto prueba con otro numero');
    } else {
      setmensajeFeedback('¡Correcto felicitaciones!');
      setEsCorrecto(true);
    }
  };

  return (
    <div className="game-container">
      <h2>¡Hola, {nombreJugador}!</h2>
      <input
        type="number"
        value={adivinanza}
        onChange={(e) => setAdivinanza(e.target.value)}
        placeholder="Ingresa tu número"
      />
      <div className="number-box">
        {esCorrecto ? numeroAleatorio : '?'}
      </div>
      <button onClick={manejarAdivinanza}>Adivinar</button>
      <Feedback message={mensajeFeedback} />
      <p>Intentos Fallidos: {intentos}</p>
    </div>
  );
}

export default Game;
