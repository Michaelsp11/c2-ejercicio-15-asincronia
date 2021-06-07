import { getPersonajes } from "./funciones.js";
// Elementos del DOM
const personajeDummy = document.querySelector(".personaje-dummy");
const personajesElemento = document.querySelector(".personajes");
const btnCargaPersonajes = document.querySelector(".cargar-personajes");
btnCargaPersonajes.addEventListener("click", () => {
    (async() => {
        const personajes = await getPersonajes();
        pintarPersonajes(personajes);
    })();
});
const vaciarPersonajes = () => {
    for (const personajeElemento of personajesElemento.querySelectorAll(
            ".personaje"
        )) {
        personajeElemento.remove();
    }
};
const pintarPersonajes = (personajes) => {
    vaciarPersonajes();
    for (const { nombre, familia, vivo }
        of personajes) {
        const nuevoPersonaje = personajeDummy.cloneNode(true);
        nuevoPersonaje.classList.remove("personaje-dummy");
        const nombreNuevoPersonaje = nuevoPersonaje.querySelector(".nombre");
        nombreNuevoPersonaje.textContent = nombre;
        const familiaNuevoPersonaje = nuevoPersonaje.querySelector(".familia");
        familiaNuevoPersonaje.textContent = familia;
        const estadoNuevoPersonaje = nuevoPersonaje.querySelector(".estado");
        estadoNuevoPersonaje.textContent = vivo ? "vivo" : "muerto";
        personajesElemento.append(nuevoPersonaje);
    }
};