import React from "react"

// A diferencia de useMemo, React.memo funciona con componentes, en este caso
//fragmentos de jsx, la funcionalidad es la misma, evitar reenderizados innecesarios
export const Incrementar = React.memo(({ incrementar }) => {
    return (
        <button className="btn btn-primary" onClick={() => incrementar(1)}>+1</button>
    )
}
)