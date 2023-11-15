import { useState } from "react"

export const userForm = (initialForm = {}) => {

    const [formState, setformState] = useState(initialForm)

    const { userName, email, password } = formState

    const onInputChange = ({ target }) => {
        const { name, value } = target
        setformState({
            /* "spread operator" o "operador de propagación". Es una característica de 
            JavaScript que permite copiar todas las propiedades enumerables de un objeto en otro objeto nuevo. 
            En este caso, se está utilizando para crear una copia superficial del objeto formState. */
            ...formState, // Copia todas las propiedades existentes
            [name]: value // Actualiza solo la propiedad correspondiente con [name]

        })
    }

    return {
        ...formState,
        formState,
        onInputChange
    }
}
