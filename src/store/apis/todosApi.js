import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const todosApi = createApi({

    reducerPath: 'todos',

    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com'
    }),

    //*1
    endpoints: (builder) => ({

        getTodos: builder.query({
            query: () => '/todos'
        }), // Obtiene los todos. Concatena todos al baseURL

        getTodo: builder.query({
            query: (todoId) => `/todos/${ todoId }`
        }),

    })

})

export const { useGetTodosQuery, useGetTodoQuery, } = todosApi;

// *1 Diferentes funciones que vamos a querer llamar para traer la informacion

// En el export exportamos un custom hook. El createApi custom hooks. El custom hook tendra toda la informacion necesaria para saber cuando tuvimos errores, cuando se cargo, etc.

// Los endpoints los llamamos por medio de los custom hooks

// baseQuery es similar al baseURL de Axios