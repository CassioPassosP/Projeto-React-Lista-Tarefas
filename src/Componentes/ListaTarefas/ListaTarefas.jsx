import style from './ListaTarefas.module.css'

import { ListaTarefasItem } from "./ListaTarefasItem"

import {useAppContext} from "../../hooks"

import { Loading } from '../Loading'

const ListaTarefas = () =>{
    const {tarefas, LoadingCarregar} = useAppContext()

    return(
        <ul className = {style.ListaTarefas}>
            {LoadingCarregar && (<p>Carregando...  <Loading/></p>)}
            {!LoadingCarregar && !tarefas.length && (<p>Nao ha tarefas cadastradas</p>)}
            {tarefas.map(item => <ListaTarefasItem key = {item.id} id={item.id} nome={item.nome} />)}
            
        
            
        </ul>
    )
}

export {ListaTarefas}