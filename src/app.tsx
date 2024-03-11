import React from "react";
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
  })
  

  return (
    <>
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
