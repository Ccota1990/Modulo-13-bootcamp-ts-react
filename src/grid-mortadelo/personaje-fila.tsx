import React from "react";
import { Personaje } from "./modelo";
import { Link } from "react-router-dom";

interface Props {
    personaje: Personaje;
}

export const PersonajeFila: React.FC<Props> = (props) => {
    const { personaje } = props;
 
    return (
    <React.Fragment>
        <img src={`http://localhost:3000/${personaje.imagen}`} />
        <Link to={`/personaje/${personaje.id}`}>{personaje.nombre}</Link>
        <span>{personaje.especialidad}</span>
    </React.Fragment>
    );
};