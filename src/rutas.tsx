import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {GridMiembros} from './grid-miembros'
import { MiembroDetalle } from "./detalle-miembro";
import { Home } from "./home";
import { GridPersonajes } from "./grid-mortadelo";
import { DetallePersonaje } from "./detalle-personaje";

export const Rutas : React.FC = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/miembros" element={<GridMiembros />} />
                <Route path="/detalle/:id" element={<MiembroDetalle />} />
                <Route path="/personajes" element={<GridPersonajes />} />
                <Route path="/personaje/:id" element={<DetallePersonaje />} />
            </Routes>
        </Router>
    )
}
