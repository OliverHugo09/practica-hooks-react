import { useEffect, useRef } from "react"
import { userForm } from "../hooks/userForm"

export const FormularioComponent = () => {

    //useRef permite crear referencias a elementos del DOM o mantener valores persistentes entre 
    //renders sin provocar re-renders adicionales. Se usa como {current} para acceder o 
    //modificar el valor actual sin afectar la renderización.
    const focusRef = useRef()

    const initialForm = {
        userName: '',
        email: '',
        password: ''
    }
    const { formState, userName, email, password, onInputChange } = userForm(initialForm)

    const onSubmit = (event) => {
        event.preventDefault() //evita que la página se recargue cuando se envía un formulario.
        console.log(formState)

    }

    useEffect(() => {
        focusRef.current.focus()
    }, [])

    return (
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="userName">User name</label>
                <input
                    ref={focusRef} // se establece focus al input
                    type="text"
                    className="form-control"
                    name="userName"
                    placeholder="Enter your Username"
                    value={userName}
                    onChange={onInputChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={onInputChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={onInputChange}
                />
            </div>
            <button
                type="submit"
                className="btn btn-primary"
            >
                Submit
            </button>
        </form>
    )
}
