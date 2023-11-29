import { Link } from "react-router-dom"
import Calculadora from "./Calculadora";

export default function Atv04() {
    return (
        <>
            <h1>Atividade 04</h1>
            <br />
            <Calculadora/>
            <br />
            <Link to="/"> Retornar </Link>
        </>
    );
}