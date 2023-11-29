import React from "react";
import {Link} from "react-router-dom";

const Home = () => {

    return (
        <div>
        <h1>Pagina Inicial</h1>
        <nav>
            <ul>
                <li>
                    <Link to="/Atv01">Relógio e Letreiro</Link>
                </li>
                <li>
                    <Link to="/Atv02">Contador Homem/Mulher</Link>
                </li>
                <li>
                    <Link to="/Atv03">Atividade Profile</Link>
                </li>
                <li>
                    <Link to="/Atv04">Calculadora</Link>
                </li>
                <li>
                    <Link to="/Atv05">Jogo da Memoria</Link>
                </li>
            </ul>
        </nav>
        </div>
    );
}
export default Home;
