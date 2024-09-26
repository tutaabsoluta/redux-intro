import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        page: 0,
        pokemons: [],
        isLoading: false,
    },
    reducers: {
        startLoadingPokemons: (state, /* action */ ) => {
            state.isLoading = true;
        },

        setPokemons: ( state, action ) => {
            // isLoading false xq ya tendria datos
            state.isLoading= false;
            state.page = action.payload.page; // En el payload debe venir la pagina que quiero establecer
            state.pokemons = action.payload.pokemons // En el payload debemos tener la data
        }
    }
});


// Action creators are generated for each case reducer function
export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions;