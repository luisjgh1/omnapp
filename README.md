
# Omni Guidelines

## Git flow

Las ramas son master, development, \<personal>.

Cada colaborador tendra una rama con su nombre y hara los cambios correspondientes a su tarea ahi.

Se hara merge de development a su rama cada vez que development cambie y se necesiten esos cambios.

Asi mismo merge request de su rama a development cada vez que un feature este listo.

## Indentación

Se usaran 2 espacios.
Debera ejecutarse `yarn run lint` antes de hacer un commit y corregir los errores.

## Redux

Es importante seguir un buen patron de diseño para que no choque el desarrollo entre los miembros.

### store
El store se describe en redux implicitamente en el root reducer, esto quiere decir que, si nuestro root reducer es:
``` javascript
export default combineReducers({
  users,
  cotizacion,
})
```
Nuestro store tendra esta forma:
```javascript
store: {
  users: {...}
  cotizacion: {...}
}
```

### Actions
Las actions seguiran el estandar de [FSA](https://github.com/redux-utilities/flux-standard-action)
Se usaran actions creators y estas viviran en el directorio .src/redux/actions .
Cada set de action creators tendra su propio directorio si es necesario.

Ojo:
Un *action creator* es una funcion que devuelve un objeto literal. Esto es porque el reducer recibe actions Ej.

``` javascript
const DELETE_USER = 'DELETE USER'
const deleteUser = user => ({
  type: DELETE_USER,
  payload: { user }
})
```
Un action nunca debe ser una funcion async ni un api call.
Todo debe pasar por dispatch.
```javascript
// Esto
dispatch({type: `DELETE_USER`, payload: user: {...}})
// Es igual a
dispatch(deleteUser())

deleteUser() // Mal

// Lo siguiente es en caso de un thunk
dispatch(dispatch => ...) // Thunk
```
En caso de ser una funcion lo que devuelve nuestro action creator se debe manejar con redux thunk.

#### thunk

Para las llamadas asincronas se usara redux thunk.

Un thunk de redux tiene la siguiente estructura
```javascript
const deleteOnDatabase = user => dispatch => {
  fetch('example.com').then(e => {
    dispatch({type: 'DELETION_DONE'})
  })
  .catch(error => {
    dispatch({type: 'DELETION_ERROR', error})
  })
}
// O para los amantes del async await
const deleteOnDatabase = user => async dispatch => {
  try {
    await fetch('example.com')
    dispatch({type: 'DELETION_DONE'})
  } catch (error) {
    dispatch({type: 'DELETION_ERROR', error})
  }
}
```
Es una funcion curryficada(que recibe un solo parametro a la vez y retorna una funcion)
siempre debe recibir dispatch como segundo argumento.
Se debe mantener el flujo async controlado.

