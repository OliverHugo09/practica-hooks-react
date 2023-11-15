import { useReducer } from "react"
import { userForm } from "../hooks/userForm"

const initialState = [{
    id: new Date().getTime(),
    tarea: 'Explicar Reducers',
    finalizada: false
}]

//Reducer en React es una función que administra el estado de un componente de manera 
//más compleja. Toma un estado actual y una acción, realiza cambios en el estado en función
//de la acción y devuelve un nuevo estado. Se usa comúnmente con useReducer para gestionar
//estados complejos y lógica de actualización predecible en componentes funcionales.

const tareaReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case '[TAREAS] Agregar Tarea':
            return [...state, action.payload]
        case '[TAREAS] Finalizar Tarea':
            return state.map(tarea => {
                if (tarea.id === action.payload) {
                    return {
                        ...tarea,
                        finalizada: !tarea.finalizada
                    }
                } return tarea
            })
        //return [...state, action.payload]
        case '[TAREAS] Eliminar Tarea':
            return state.filter(tarea => tarea.id !== action.payload)
        //return [...state, action.payload]
        case '[TAREAS] Eliminar Tareas':
            return []
        default:
            return state
    }
}

export const ListaTareas = () => {

    const [tareasState, dispatch] = useReducer(tareaReducer, initialState)

    const { tarea, formState, onInputChange } = userForm({ tarea: '' })
    const agregarTarea = (event) => {
        event.preventDefault()
        if (formState.tarea == '') return
        const tarea = {
            id: new Date().getTime(),
            tarea: formState.tarea,
            finalizada: false
        }
        const action = {
            type: '[TAREAS] Agregar Tarea',
            payload: tarea
        }
        dispatch(action)
    }

    const finalizarTarea = ({ id }) => {
        const action = {
            type: '[TAREAS] Finalizar Tarea',
            payload: id
        }
        dispatch(action)
    }

    const eliminarTarea = ({ id }) => {
        const action = {
            type: '[TAREAS] Eliminar Tarea',
            payload: id
        }
        dispatch(action)
    }

    const reset = () => {
        const action = {
            type: '[TAREAS] Eliminar Tareas',
            payload: ''
        }
        dispatch(action)
    }
    return (
        <>
            <form onSubmit={agregarTarea}>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        name="tarea"
                        placeholder="Ingresa tarea"
                        value={tarea}
                        onChange={onInputChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <button type="button" className="btn btn-danger" onClick={reset}>Reset</button>
            </form>
            <hr />
            <ul className="list-group">
                {tareasState.map(item => {
                    return (
                        <li key={item.id} className="list-group-item d-flex justify-content-between">
                            <span>{item.tarea}</span>
                            <div>
                                <input
                                    type="checkbox"
                                    value={item.finalizada}
                                    onChange={() => finalizarTarea(item)}
                                />
                                <button
                                    className="btn btn-danger"
                                    onClick={() => eliminarTarea(item)}
                                >Borrar</button>
                            </div>

                        </li>
                    )
                })}
            </ul>
        </>
    )
}
