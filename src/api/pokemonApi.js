import axios from "axios";

export const pokemonApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2'
});

// Con axios no debemos hacer la des serializacion del readable string que genera el resp.json
// Pero tambien permite crear una instancia

// create permite crear una configuracion estandar que ayuda a no repetir codigo. Utiles para tokens de autenticacion en cada peticion