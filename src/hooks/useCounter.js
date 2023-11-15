import { useState } from "react"

export const useCounter = (initialValue = 0) => {

    // useState es una función que tiene un valor inicial y un arreglo con dos elementos,
    // el valor inicial puede proveenir del componente padre o ser definido en el componente hijo
    // el primer elemento del arreglo contiene el valor inicial, mientras que el segundo permite modificar el estado
    const [counter, setcounter] = useState(initialValue)

    const increment = (value = 1) => {
        setcounter(counter + value)
    }
    const decrement = (value = 1, negative) => {
        if (!negative && counter - value < 0) {
            setcounter(0)
            return
        }

        setcounter(counter - value)
    }
    const reset = () => {
        setcounter(0)
    }
    return {
        counter,
        increment,
        decrement,
        reset
    }
}
