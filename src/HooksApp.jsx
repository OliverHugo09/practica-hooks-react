import { CalculosPesados } from "./components/CalculosPesados"
import { CallBackComponent } from "./components/CallBackComponent"
import { ContadorComponent } from "./components/ContadorComponent"
import { FormularioComponent } from "./components/FormularioComponent"
import { ListaTareas } from "./components/ListaTareas"
import { UsuariosComponent } from "./components/UsuariosComponent"
import { Incrementar } from "./components/Incrementar"

export const HooksApp = () => {
    return (
        <>
            <h1>Aplicación de Hooks</h1>
            <hr />
            {/* <ContadorComponent></ContadorComponent> */}
            {/* <FormularioComponent></FormularioComponent> */}
            {/* <UsuariosComponent></UsuariosComponent> */}
            {/* <CalculosPesados></CalculosPesados> */}
            {/* <CallBackComponent></CallBackComponent> */}
            <ListaTareas></ListaTareas>
        </>

    )
}
