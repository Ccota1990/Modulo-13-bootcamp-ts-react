import React from "react";
import { Personaje } from "./modelo";
import { PersonajeFila } from "./personaje-fila";
import { obtenerPersonajes } from "./personaje.api";

   
export const GridPersonajes = () => {
    const [personajes, setPersonajes] = React.useState<Personaje[]>([]);

    React.useEffect(() => {
        obtenerPersonajes().then(setPersonajes);
        }, []);

    return (
        <div className="user-list-container">
        <span className="header">Avatar</span>
        <span className="header">Nombre</span>
        <span className="header">Especialidades</span>
        {personajes.map((personaje) => (
            <PersonajeFila key={personaje.id} personaje={personaje} />
        ))}
        </div>      
)}
   