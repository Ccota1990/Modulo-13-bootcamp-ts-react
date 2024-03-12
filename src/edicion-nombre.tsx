import React from "react";

interface Props {
    nombreInicial:string;
    onActualizarNombre : (nuevoNombre: string) => void;
}

export const EdicionNombre: React.FC <Props> = (props) => {
    const { nombreInicial, onActualizarNombre} = props;
    const [nombreTemporal, setNombreTemporal] = React.useState(nombreInicial);
    
    return (

        <div>
            <label> Nombre : </label>
            <input
                value= {nombreTemporal}
                onChange={(e) => setNombreTemporal(e.target.value)}
            />
            <button onClick={() => onActualizarNombre(nombreTemporal)}>Actualizar Nombre</button>
        </div>
    )
    
}