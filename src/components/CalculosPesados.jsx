import { useMemo, useState } from "react"

export const CalculosPesados = () => {

    const [listaNumeros, setListaNumeros] = useState([2, 3, 4, 5, 6, 7, 8, 9])
    const [show, setShow] = useState(true)

    // useMemo en React se utiliza para memorizar (cachear) un valor calculado en un 
    //componente funcional (Variables). Recibe una función y una lista de dependencias. 
    //El valor se calcula solo cuando las dependencias cambian, evitando cálculos innecesarios.
    const getCalculo = (listaNumeros) => useMemo(() => {
        console.log('Calculando')
        return listaNumeros.reduce((a, b) => a + b, 0)
    }, [listaNumeros])

    const agregarNumero = () => {
        setListaNumeros([...listaNumeros, listaNumeros[listaNumeros.length - 1] + 1])
    }

    return (
        <>
            <h2>Calculo:</h2>
            <p>{getCalculo(listaNumeros)}</p>

            <button className="btn btn-primary" onClick={() => setShow(!show)}>{show ? 'Show' : 'Hide'}</button>
            <button className="btn btn-primary" onClick={() => agregarNumero()}>Agregar numero</button>
        </>
    )
}
