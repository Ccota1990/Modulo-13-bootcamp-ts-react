import React from "react";
import { useParams } from "react-router-dom";
import { getPersonajeById } from "./detalle-personaje-api";
import { Personaje, crearPersonajeVacio } from "./detallle-modelo-personaje";
import { Layout } from "@/layouts";

export const DetallePersonaje: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [personaje, setPersonaje] = React.useState<Personaje>(
    crearPersonajeVacio()
    );
    React.useEffect(() => {
        if (id) {
            try {
                getPersonajeById(id).then(setPersonaje);
            } catch (error) {
                throw new Error("Error al cargar el personaje");
            }
            }
    }, []);
    return (
        <Layout>

        <div className="contenedor-detalle">
            <h2>Detalle del personaje</h2>
            <img src={`http://localhost:3000/${personaje.imagen}`} />
            <p>
                <span style={{ fontWeight: "bold" }}>Nombre:</span> {personaje.nombre}
            </p>
            <p>
                <span style={{ fontWeight: "bold" }}>Apodo: </span> {personaje.apodo}
            </p>
            <p>
                <span style={{ fontWeight: "bold" }}>Especialidad: </span>
                {personaje.especialidad}
            </p>
        </div>
        </Layout>
        );
    
    };
    