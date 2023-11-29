import React, { useEffect, useState } from 'react';
import './Contador.css';

function Contador() {
    const [totalPessoas, setTotalPessoas] = useState(0);
    const [homens, setHomens] = useState(0);
    const [mulheres, setMulheres] = useState(0);

    const incrementarHomens = () => {
        setHomens((prevCount) => prevCount + 1);
        setTotalPessoas((prevCount) => prevCount + 1);
    };

    const decrementarHomens = () => {
        if (homens > 0) {
            setHomens((prevCount) => prevCount - 1);
            setTotalPessoas((prevCount) => prevCount - 1);
        }
    };

    const incrementarMulheres = () => {
        setMulheres((prevCount) => prevCount + 1);
        setTotalPessoas((prevCount) => prevCount + 1);
    };

    const decrementarMulheres = () => {
        if (mulheres > 0) {
            setMulheres((prevCount) => prevCount - 1);
            setTotalPessoas((prevCount) => prevCount - 1);
        }
    };

    const resetarContadores = () => {
        setTotalPessoas(0);
        setHomens(0);
        setMulheres(0);
    };

    return (
        <div className="contador">
            <p>Total: {totalPessoas}</p>
            <div className='contador-pessoas'>
                <div>
                    <p>Homens: {homens}</p>
                    <img className='imagem' src='./IconeHomem.png' alt="Ícone Homem"/>
                    <div>
                        <button className='incrementar' onClick={incrementarHomens}>+</button>
                        <button className='decrementar' onClick={decrementarHomens}>-</button>
                    </div>
                </div>
                <div>
                    <p>Mulheres: {mulheres}</p>
                    <img className='imagem' src='./IconeMulher.png' alt="Ícone Mulher"/> 
                    <div>
                        <button className='incrementar' onClick={incrementarMulheres}>+</button>
                        <button className='decrementar' onClick={decrementarMulheres}>-</button>
                    </div>
                </div>
            </div>
            <button className='resetar' onClick={resetarContadores}>Resetar</button>
        </div>
    );
}

export default Contador;
