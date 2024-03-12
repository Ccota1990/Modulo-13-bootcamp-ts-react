import React from "react";
import { Saludo } from "./saludo";
import { EdicionNombre } from "./edicion-nombre";
interface Usuario {
  nombre: string;
  apellidos: string;
  ciudad: string;
};

export const App = () => {
  const [usuario, setUsuario] = React.useState<Usuario>({
    nombre: "Braulio",
    apellidos: "Perez",
    ciudad: "Madrid",
  });

  const [nombre, setNombre] = React.useState("Lemoncode")

  return (
    <>
      <Saludo nombre ={nombre}/>
      <EdicionNombre nombreInicial = {nombre} onActualizarNombre= {setNombre} />


      <h1>Nombre: {usuario.nombre}</h1>
      <input
        value = {usuario.nombre}
        onChange={(e) => {
          setUsuario({
            ...usuario,
            nombre: e.target.value
          });
        }}
      />

      <h1>Apellidos: {usuario.apellidos}</h1>
      <input
        value = {usuario.apellidos}
        onChange={(e) => {
          setUsuario({
            ...usuario,
            nombre: e.target.value
          });
        }}
      />
      <h1>Ciudad: {usuario.ciudad}</h1>
      <input
        value = {usuario.ciudad}
        onChange={(e) => {
          setUsuario({
            ...usuario,
            ciudad: e.target.value
          });
        }}
      />
    </>
  );
};
