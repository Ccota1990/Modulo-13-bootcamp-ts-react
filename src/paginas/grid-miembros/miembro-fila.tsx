import React from "react";
import { Miembro } from "../../modelo";
import { Link, generatePath } from "react-router-dom";
import { rutas } from "@/constantes";

interface Props{
    miembro : Miembro;
}

export const MiembroFila: React.FC<Props> = (props) => {
    const { miembro } = props;

    return (
    <React.Fragment>
        <img src={miembro.avatar_url} />
        <Link to={generatePath(rutas.DETALLE_MIEMBRO, {id : miembro.id})}>{miembro.id}</Link>
        <span>{miembro.login}</span>
    </React.Fragment>
    );
};
   