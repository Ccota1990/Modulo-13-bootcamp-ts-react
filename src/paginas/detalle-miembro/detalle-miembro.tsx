import React from "react";
import { useParams } from "react-router-dom";
import { Miembro, crearMiembroVacio } from "./detalle-modelo";
import { getMiembroById } from "./detalle-miembro-api";
import { Layout } from "@/layouts";


export const MiembroDetalle : React.FC = () => {
    const { id } = useParams<{id: string}>();
    const [miembro, setMiembro] = React.useState<Miembro>(crearMiembroVacio());

    React.useEffect(()=>{
        if (id) {
            getMiembroById(id).then(setMiembro);
        }
    }, []);

    return (
        <Layout> 
            <div className="contenedor-detalle" >
                <h2>Detalle de miembro: {id} </h2>
                <img src ={miembro.avatar_url} />
                <p>{miembro.login}</p>
            </div> 
        </Layout>
    );
};