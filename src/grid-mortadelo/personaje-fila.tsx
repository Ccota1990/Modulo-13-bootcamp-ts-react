import React from "react";
import { Personaje } from "./modelo";
interface Props {
 personaje: Personaje;
}
export const PersonajeFila: React.FC<Props> = (props) => {
    const { personaje } = props;
 
    return (
    <React.Fragment>
        <img src={`http://localhost:3000/${personaje.imagen}`} />
        <span>{personaje.nombre}</span>
        <span>{personaje.especialidad}</span>
    </React.Fragment>
    );
};