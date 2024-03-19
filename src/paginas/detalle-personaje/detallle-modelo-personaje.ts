export interface Personaje {
    id: string;
    nombre: string;
    apodo: string;
    especialidad: string;
    habilidades: string[];
    imagen: string;   
}

export const crearPersonajeVacio =() : Personaje => ({
    id: "",
    nombre: "",
    apodo: "",
    especialidad: "",
    habilidades: [],
    imagen: "",
});