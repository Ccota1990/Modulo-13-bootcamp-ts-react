import { Layout } from "@/layouts";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Credencial, crearCredencialVacia } from "./modelo";
import { iniciarSesion } from "./login.api";
import { rutas } from "@/constantes";
import { MiContexto } from "@/core/contexto";

export const Login: React.FC = () => {
    const {setNombreUsuario} = React.useContext(MiContexto);
    const navigate = useNavigate();
    const [perfilUsuario, setPerfilUsuario] = React.useState<Credencial>(
    crearCredencialVacia()
    );

    const autenticar = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault ();

        iniciarSesion(perfilUsuario).then((esValido) => {
            if (esValido) {
                console.log("autenticado");
                setNombreUsuario(perfilUsuario.usuario);
                navigate(rutas.OPCIONES);  
            } else {
                console.log("Usuario o contraseña incorrectos");
                }
        });
    };
        
    return (
        <Layout>
        <div className="contenedor-login">
            <h2>Inicio de Sesión</h2>
            <form onSubmit={autenticar} className="contenedor-formulario">
                <label htmlFor="usuario">Usuario: </label>
                <input id="usuario" placeholder="Usuario" autoComplete="off" onChange={(e) => 
                setPerfilUsuario({ ...perfilUsuario, usuario: e.target.value })
                }/>
                <label htmlFor="password">Contraseña: </label>
                <input id="password" type="password" autoComplete="off" placeholder="Contraseña" onChange={(e) =>
                setPerfilUsuario({ ...perfilUsuario, password: e.target.value })
                }/>
                <button type="submit">Iniciar sesión</button>
            </form>
        </div>
        </Layout>
    );
};