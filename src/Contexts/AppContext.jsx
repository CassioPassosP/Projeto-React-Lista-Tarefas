import { createContext, useEffect, useState } from "react";

import {api} from '../services'

export const AppContext = createContext({})

export const AppContextProvider = (props) => {
    const {children} = props

    const [loading, setLoading] = useState(false);

    const [criador, setCriador] = useState('Cassio')

    const [tarefas, setTarefas] = useState([])

    const [LoadingCarregar,setLoadingCarregar] = useState(false)
    const [LoadingCriar,setLoadingCriar] = useState(false)
    const [LoadingEditar,setLoadingEditar] = useState(null)
    const [LoadingDeletar,setLoadingDeletar] = useState(null)

    //backend
    const carregarTarefas = async () => {
        setLoadingCarregar(true)
        const {data = []} = await api.get('/tarefas')
        //

        setTarefas([
            ...data,
        ])

        setLoadingCarregar(false)
    }

    const adicionarTarefa = async (nomeTarefa) =>{
        setLoadingCriar(true)
        //backend
        setLoading(true);
        const { data: tarefa} = await api.post('/tarefas', {
            nome: nomeTarefa,
        } )

         setTarefas(estadoAtual => {
                 return[...estadoAtual, tarefa, ]
             })



    setLoadingCriar(false)  
    }
    const removerTarefa = async (idTarefa) => {
        setLoadingDeletar(idTarefa)
        //backend
        await api.delete(`tarefas/${idTarefa}`)
        //
        setTarefas (estadoAtual => {
            const tarefasAtualizadas = estadoAtual.filter(tarefa => tarefa.id != idTarefa)

            return [...tarefasAtualizadas,]
        })


        setLoadingDeletar(null)
    }

    const editarTarefa = async (idTarefa, nomeTarefa) => {
        setLoadingEditar(idTarefa)
        //backend
        const {data: tarefaAtualizada } = await api.put(`tarefas/${idTarefa}`, {
            nome: nomeTarefa,
        })
        //
        setTarefas(estadoAtual => { const tarefasAtualizadas = estadoAtual.map(tarefa => {
            return tarefa.id == idTarefa ? {
                ...tarefa,
                nome: tarefaAtualizada.nome,
            }: tarefa
        })
    return [...tarefasAtualizadas]
    })

    setLoadingEditar(null)
    }
    //backend
    useEffect(() => {
        carregarTarefas()
    }, [])
    //

    return(
        <AppContext.Provider value = {{criador, tarefas, adicionarTarefa, removerTarefa, editarTarefa,LoadingCarregar,LoadingCriar,LoadingDeletar,LoadingEditar,}}>
            {children}
        </AppContext.Provider>

    )
}