import React from "react";
import { Link } from "react-router-dom";

export const Home: React.FC = () => {
    return (
    <>
        <h2>Hola desde Home</h2>
        <div>
            <Link to="/miembros">Miembros</Link>
        </div>
        <div>
            <Link to="/personajes">Personajes</Link>
        </div>
    </>
    );
   };
   