import './Letreiro.css';
import React ,{ useEffect, useState } from 'react';

function Letreiro() {
  const [texto, setTexto] = useState('Conheça a Fatec');
  const [letr, setLetr] = useState('');
  const [index, setIndex] = useState(0);

  const letreiro = document.getElementById('letreiro');
  
  useEffect(() => {

    const interval = setInterval(() => {
      if(letr.length === texto.length)
      {
        setLetr('');
        setIndex(0);
      } else {
        setLetr(letr + texto[index]);
        setIndex(index + 1);
      }
    }, 500);
    
    return () => clearInterval(interval);

  }, [texto, letr, index]);

  return (
    <div className='Letreiro'>
      <h1>{letr}</h1>
    </div>
  )
}


export default Letreiro; 
