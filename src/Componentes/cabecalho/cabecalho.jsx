//props = propriedade
import style from './cabecalho.module.css'

import { Link } from 'react-router-dom'

const Cabecalho = () => {

    return(
        <div className={style.Cabecalho}>
            <Link to="/">
            <h1>
                <span>Lista </span>
                de Tarefas
            </h1>
            </Link>

            <Link to="sobre-nos">Sobre Nos</Link>
        </div>
    ) 
}

export{Cabecalho}