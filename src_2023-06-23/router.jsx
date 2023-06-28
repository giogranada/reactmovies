import { Route, Routes } from "react-router-dom";
import Inicio from './pages/Inicio';
import Filmes from './pages/Filmes';
import Series from './pages/Series';
import Detalhes from "./pages/Detalhes";
import Erro from "./pages/Erro";

export function Router(){
    return(
        <Routes>
            <Route path="/" element={<Inicio/>} />
            <Route path="/filmes" element={<Filmes/>} />
            <Route path="/series" element={<Series/>} />
            <Route path='/detalhes/:categoria/:id' element={<Detalhes/>} />

            {/* Caso a rota acionada não exista, seré renderizada a página de erro. */}
            <Route path="*" element={<Erro/>} />
        </Routes>
    )
}