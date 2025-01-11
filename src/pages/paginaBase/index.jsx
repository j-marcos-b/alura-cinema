import { Outlet } from "react-router-dom";
import Cabecera from "../../components/cabecera/Cabecera";
import Container from "../../components/container";
import FavoritosProvider from "../../providers/FavoritosProvider";
import Pie from "../../components/pie";

const PaginaBase = () => {
    return (
        <main>
            <Cabecera />
            <FavoritosProvider>
                <Container>
                    <Outlet />
                </Container>
            </FavoritosProvider>
            <Pie />
        </main>
    )
}

export default PaginaBase;