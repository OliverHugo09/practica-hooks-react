import { useState, useCallback } from "react"
import { Incrementar } from "./Incrementar"

export const CallBackComponent = () => {

    const [counter, setCounter] = useState(0)

    const incrementarPadre = useCallback((val) => {
        //Solo en useCallback se utiliza otra manera de modificar el estado
        setCounter(contador => contador + val)
    }, []
    )

    return (
        <>
            <h2>Contador: {counter}</h2>
            <Incrementar incrementar={incrementarPadre}></Incrementar>
        </>
    )
}
