import { useAppContext } from '../../../hooks'

import { Botao, TIPO_BOTAO, CampoTexto, Loading } from '../../../Componentes'

import style from './ListaTarefasItem.module.css'
import { useState } from 'react'

const ListaTarefasItem = (props) => {
    const {id, nome} = props

    const [estaEditando, setEstaEditando] = useState(false)

    const { LoadingEditar, LoadingDeletar, editarTarefa, removerTarefa } = useAppContext()


    const onBlurTarefa = (event) =>{
      const nomeTarefa = event.currentTarget.value

      editarTarefa(id, nomeTarefa)

      setEstaEditando(false)
    }

    const loadingEstaEditando = LoadingEditar == id
    const loadingEstaDeletando = LoadingDeletar == id

     return(
        <li className = {style.ListaTarefasItem}>
           {loadingEstaEditando || estaEditando && (<CampoTexto defaultValue={nome} onChange={event => editarTarefa(id, event.currentTarget.value)}  onBlur={onBlurTarefa}  autoFocus />)}

           {!loadingEstaEditando && !estaEditando && (<span onDoubleClick={() => setEstaEditando(true)}>{nome}</span>)}

           {loadingEstaEditando && (<Loading/>)}

           <Botao texto={loadingEstaDeletando ? <Loading/> : '-'} tipo={TIPO_BOTAO.SECUNDARIO} onClick={() => removerTarefa(id)}/>

        </li>
     )


}
export {ListaTarefasItem}