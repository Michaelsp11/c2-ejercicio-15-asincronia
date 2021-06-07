import { getPersonajes, mataPersonajes } from "./funciones.js";

// Elementos del DOM
const personajeDummy = document.querySelector(".personaje-dummy");
const personajesElemento = document.querySelector(".personajes");
const btnCargaPersonajes = document.querySelector(".cargar-personajes");
const btnMatarFamilia = document.querySelector(".matar-familia");
const inputFamilia = document.querySelector(".familia");
const mensajeErrorElemento = document.querySelector(".mensaje");
btnCargaPersonajes.addEventListener("click", async() => {
    try {
        const personajes = await getPersonajes();
        pintarPersonajes(personajes);
    } catch (error) {
        mensajeErrorElemento.textContent = error.message;
    }
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
        const familiaNuevoPersonaje =
            nuevoPersonaje.querySelector(".nombre-familia");
        familiaNuevoPersonaje.textContent = familia;
        const estadoNuevoPersonaje = nuevoPersonaje.querySelector(".estado");
        estadoNuevoPersonaje.textContent = vivo ? "vivo" : "muerto";
        personajesElemento.append(nuevoPersonaje);
    }
};
btnMatarFamilia.addEventListener("click", async() => {
    try {
        const arrayPersonajesModificados = await mataPersonajes(inputFamilia.value);
        pintarPersonajes(arrayPersonajesModificados);
    } catch (error) {
        mensajeErrorElemento.textContent = error.message;
    }
});