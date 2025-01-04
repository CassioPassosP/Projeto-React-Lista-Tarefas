import { useContext } from "react"

import { AppContext } from "../Contexts"

const useAppContext = () => {
    const contexto = useContext(AppContext)

    return contexto
}

export {useAppContext}