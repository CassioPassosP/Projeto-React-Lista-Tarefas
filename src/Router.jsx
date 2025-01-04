import {Route, Routes} from 'react-router-dom'

import {Inicial, SobreNos, PaginaNaoEncontrada} from './pages'
import { LayoutPadrao } from './Layouts'

const Router = () => {
    return(
        <Routes>
           <Route path="/" element={<LayoutPadrao/>}>
               <Route path="/" element={<Inicial/>}/>
               <Route path="/sobre-nos" element={<SobreNos/>}/>
               <Route path="*" element={<PaginaNaoEncontrada/>}/>
           </Route>
        </Routes>
    )
}

export {Router}