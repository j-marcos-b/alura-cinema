import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/inicio";
import Favoritos from "./pages/favoritos";
import Player from "./pages/player";
import NotFound from "./pages/notFound";
import PaginaBase from "./pages/paginaBase";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaBase />} >
                    <Route index element={<Inicio />} />
                    <Route path="favoritos" element={<Favoritos />} />
                    <Route path=":id" element={<Player />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;