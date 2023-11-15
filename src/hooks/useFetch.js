import { useEffect } from "react"
import { useState } from "react"

export const useFetch = (url) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        errors: null
    })

    const { data, isLoading, errors } = state

    const getFetch = async () => {
        try {
            const response = await fetch(url)
            const data = await response.json()
            setState({
                data,
                isLoading: false,
                errors: null
            })
        } catch (error) {
            setState({
                data: null,
                isLoading: false,
                errors: error
            })
        }
    }

    //useEffect en React permite ejecutar código en respuesta a cambios en el estado o la llegada de 
    //nuevos datos en componentes funcionales, gestionando efectos secundarios como llamadas a API o 
    //manipulación del DOM de manera segura y eficiente

    // UseEffect se usa para llamar a la función asincrona, en este caso getFetch
    useEffect(() => {
        if (!url) return
        getFetch()
    }, [url])

    return {
        data,
        isLoading,
        errors
    }
}
