
import React, { useState, useEffect } from 'react';
import './JogoDaMemoria.css';


const shuffleArray = (array) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const generateCards = () => {
  const symbols = ['🍬', '🍭', '🍫', '🍩', '🍰', '🧁', '🍧', '🍪'];
  const cards = [...symbols, ...symbols];
  return shuffleArray(cards);
};

const initialGameState = {
  cards: generateCards(),
  flippedIndices: [],
  matchedPairs: [],
};

const JogoDaMemoria = () => {
  const [gameState, setGameState] = useState(initialGameState);

  
  const handleCardClick = (index) => {
    if (gameState.flippedIndices.length < 2 && !gameState.flippedIndices.includes(index)) {
      setGameState((prev) => ({ ...prev, flippedIndices: [...prev.flippedIndices, index] }));
    }
  };

  useEffect(() => {
    if (gameState.flippedIndices.length === 2) {
      const [index1, index2] = gameState.flippedIndices;
      if (gameState.cards[index1] === gameState.cards[index2]) {
        setGameState((prev) => ({
          ...prev,
          matchedPairs: [...prev.matchedPairs, gameState.cards[index1]],
        }));
        
      } 
      setTimeout(() => {
        setGameState((prev) => ({ ...prev, flippedIndices: [] }));
      }, 1000);
    }
  }, [gameState.flippedIndices, gameState.cards]);

  useEffect(() => {
    if (gameState.matchedPairs.length === gameState.cards.length / 2) {
     
      alert('Parabéns! Você ganhou!');
      setGameState(initialGameState);
    }
  }, [
    gameState.matchedPairs,
    gameState.cards,
    initialGameState,
  ]);

  const handleRestart = () => {
    setGameState(initialGameState);
  };

  const renderCard = (symbol, index) => {
    const isFlipped = gameState.flippedIndices.includes(index) || gameState.matchedPairs.includes(symbol);
    return (
      <div
        key={index}
        className={`card ${isFlipped ? 'flipped' : ''}`}
        onClick={() => handleCardClick(index)}
      >
        {isFlipped ? symbol : '?'}
      </div>
    );
  };

  return (
    <div className="App-Memoria">
      <div className="card-container">
        {gameState.cards.map((symbol, index) => renderCard(symbol, index))}
      </div>
      <div className="button-container">
        <button className="button" onClick={handleRestart}>RESETAR</button>
      </div>
    </div>
  );
};

export default JogoDaMemoria;