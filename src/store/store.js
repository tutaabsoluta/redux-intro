import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './slices/counter'
import { pokemonSlice } from './slices/pokemon'
import { todosApi } from './apis/todosApi'

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    pokemon: pokemonSlice.reducer,
    
    [todosApi.reducerPath]: todosApi.reducer, // *1
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(todosApi.middleware)
})

// El Store tiene toda la informacion de la aplicacion, si un modal esta abierto, si el sidebar esta abierto, si el usuario esta autenticado. Cualquier informacion que debe ser compartida a varios componentes, debe estar alojada en el Store.

// No todo estara en el Store, puede haber estado local.
// La idea es que cuando necesitemos cualquier informacion del estado, lo busquemos en el Store

// useSelector: cuando queremos tomar una pieza del State
// useDispatch: para tener acceso a la funcion dispatch la cual sirve para despachar acciones.

// Estos dos hooks sirven para interactuar con el Store

// *1 Este es el espacio en el que coloco los resultados producto de los querys disparados

// Un middleware es una funcion que se ejecuta antes que otra