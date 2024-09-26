import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice"



export const getPokemons = ( page = 0 ) => {
    return async ( dispatch, getState ) => { // *1
        dispatch( startLoadingPokemons() ); //*2

        const { data } = await pokemonApi.get(`/pokemon?limit=10&offset=${ page * 10 }`)

        dispatch( setPokemons( { pokemons: data.results, page: page + 1 } ) ); //*3
    }

}

// Thunk: accion asincrona que dispara otra accion. Cuando termina ya sea exitosa o no, va a disparar una accion a nuestro reducer. Cuando se ejecute y se resuelva va a llamar al setLoadingPokemons y al setPokemons

// *1
// La funcion toma como argumento el dispatch y getState:
// El dispatch es para hacer dispatch de otra accion
// getState: lo llamamos para tener todo el root state (usuario autenticado, su nombre, etc)

// Este thunk es una funcion que regresa una tarea asincrona, y cuando se resuelva va a poder ejecutar las diferentes acciones.

// Yo lo que quiero es llegar al Endpoint, traer la Data y ponerla en el Store. Una vez en el Store la tomamos con un useSelector y listo

// Cuando ya tenemos la Data lo que hay que hacer es disparar una accion

// Cambiamos el page para poder ver nuevos pokemons, ya que de otra forma solo veriamos los mismos 10. Eso hace el offset

// *2 Cuando llamo la accion de GetPokemons ponemos el Store en estado de carga, por eso llamamos el reducer startLoadingPokemons

// *3 Cuando se resuelva la peticion HTTP hacemos el dispatch de la accion setPokemons

// El thumk es una funcion que regresa una tarea asincrona, es decir regresa una funcion asincrona que se va a ejecutar y cuando se resuelva va a poder ejecutar las diferentes acciones.