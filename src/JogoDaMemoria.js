import React, { useState, useEffect } from 'react';
import './JogoDaMemoria.css';

const cartas = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

function JogoDaMemoria() {
  const [cartasEmbaralhadas, setCartasEmbaralhadas] = useState([]);
  const [cartasViradas, setCartasViradas] = useState([]);
  const [paresEncontrados, setParesEncontrados] = useState([]);

  useEffect(() => {
    const cartasDuplicadas = [...cartas, ...cartas];
    setCartasEmbaralhadas(embaralharArray(cartasDuplicadas));
  }, []);

  const handleClick = (index) => {
    if (cartasViradas.length === 1) {
      const cartaAtual = cartasEmbaralhadas[index];
      const cartaAnterior = cartasEmbaralhadas[cartasViradas[0]];

      if (cartaAtual === cartaAnterior && index !== cartasViradas[0]) {
        // Se as cartas correspondem e não é a mesma carta
        setParesEncontrados([...paresEncontrados, cartaAtual]);
      }

      setTimeout(() => {
        setCartasViradas([]);
      }, 1000);
    } else {
      setCartasViradas([index]);
    }
  };

  const embaralharArray = (array) => {
    const arrayEmbaralhado = array.slice();
    for (let i = arrayEmbaralhado.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arrayEmbaralhado[i], arrayEmbaralhado[j]] = [arrayEmbaralhado[j], arrayEmbaralhado[i]];
    }
    return arrayEmbaralhado;
  };

  return (
    <div className="JogoMemoria">
      <h1>Jogo da Memória</h1>
      <div className="container-cartas">
        {cartasEmbaralhadas.map((carta, index) => (
          <div
            key={index}
            className={`carta ${cartasViradas.includes(index) || paresEncontrados.includes(carta) ? 'virada' : ''}`}
            onClick={() => handleClick(index)}
          >
            {cartasViradas.includes(index) || paresEncontrados.includes(carta) ? carta : '?'}
          </div>
        ))}
      </div>
    </div>
  );
};

export default JogoDaMemoria;