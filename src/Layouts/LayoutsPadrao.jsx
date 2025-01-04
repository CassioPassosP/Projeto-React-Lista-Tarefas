import { Cabecalho, Conteudo , Rodape} from "../Componentes"

import { Outlet } from "react-router-dom"

import { useAppContext } from "../hooks"

const LayoutPadrao = () => {
    const {criador} = useAppContext()


    return (
    <>
      <Cabecalho nomeUsuario="Cassio"/>
        <Conteudo>
           <Outlet/>
        </Conteudo>
      <Rodape criador={criador}/>
    </>
    )
}

export {LayoutPadrao}