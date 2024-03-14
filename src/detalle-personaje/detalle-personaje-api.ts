import { Personaje } from "./detallle-modelo-personaje";

export const getPersonajeById = (id: string): Promise<Personaje> =>
 fetch(`http://localhost:3000/personajes/${id}`).then((response) =>
 response.json()
 );
