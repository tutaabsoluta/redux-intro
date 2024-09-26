# Redux

- Primero se configuro Redux Toolkit, se instalaron las dependencias, se creo el Store y se hizo el Provider de este.
- Luego se hizo un slice con sus reducers y se agrego al Store
- Se usaron los datos del Store por medio de useSelector y useDispatch
- Para manejar Actions asincronas se creo un Thunk

**Resumen para usar Redux Toolkit**

1. Instalar las dependencias
2. Crear el Store
3. Proveer el Store de Redux a React
4. Crear un Slice
5. Añadir el Slice al Store
6. Usar el State de Redux y las acciones por medio de los hooks *useSelector* y *useDispatch*
- Slice: maneja la informacion de los reducer, el estado inicial, las acciones, el nombre de esta pieza del store.

- Thunks: son una accion asincrona que dispara otra accion cuando se resuelve la peticion asincrona.
Son funciones que crean o dispachan otra accion. Es una funcion que ejecuta una tarea asincrona y cuando termina dispara una accion al Reducer. Cuando el Thunk se ejecute cuando se resuelva va a ejecutar alguna accion del Reducer.

- Axios: permite hacer configuraciones de antemano