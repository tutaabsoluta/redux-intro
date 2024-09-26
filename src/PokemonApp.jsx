import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "./store/slices/pokemon";

export const PokemonApp = () => {
  const dispatch = useDispatch();

  const { isLoading, page, pokemons = [] } = useSelector((state) => state.pokemon)


  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return (
    <>
      <h1>PokemonApp</h1>
      <hr />
      <span>Loading: {isLoading ? "True" : "False"}</span>

      <ul>
        {
          pokemons.map(({ name }) => (
            <li key={ name }>{ name }</li>
          ))
        }
      </ul>

      <button
        disabled={isLoading}
        onClick={() => { dispatch( getPokemons(page) )}}
      >
        Next Page
      </button>
    </>
  );
};

// En el useEffect, el dispatch esta memorizado, por eso no se pone como dependencia
// Lo que queremos es disparar acciones asincronas, osea el thunk

// useDispatch me crea mi dispatch function que voy a usar para disparar cualquier accion sin importar la pieza del Store que necesite
