import { Link } from "react-router-dom";
import Contador from "./Contador.js";

export default function Atv02() {
    return (
        <>
            <h1>Atividade 02</h1>
            <br />
            <Contador />
            <Link to="/"> Retornar </Link>
        </>
    );
}