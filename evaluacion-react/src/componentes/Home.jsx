import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const nombreRef = useRef();
  const navigate = useNavigate();

  const IniciarJuego = () => {
    const NombreJugador = nombreRef.current.value;
    if (NombreJugador) {
      navigate('/game', { state: { NombreJugador } });
    } else {
      alert('Para jugar tienes que ingresar tu nombre.');
    }
  };

  return (
    <div className="home-container">
      <h1> Adivina el Número </h1>
      <input type="text" placeholder="Ingresa tu nombre" ref={nombreRef} />
      <button onClick={IniciarJuego}>Empieza a Jugar :D </button>
    </div>
  );
}

export default Home;
