import { Link } from "react-router-dom"
import JogoDaMemoria from "./JogoDaMemoria";


export default function Atv05() {
    return (
        <>
            <h1>Atividade 05</h1>
            <JogoDaMemoria/>
            <br />
            <Link to="/"> Retornar </Link>
        </>
    );
}