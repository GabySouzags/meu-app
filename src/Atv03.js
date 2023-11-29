import { Link } from "react-router-dom"
import Calculadora from "./Calculadora";

export default function Atv03() {
    return (
        <>
            <h1>Atividade 03</h1>
            <br />
            <Calculadora/>
            <br />
            <Link to="/"> Retornar </Link>
        </>
    );
}