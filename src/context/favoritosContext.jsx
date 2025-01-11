import { createContext, useContext } from "react";

export const FavoritosContext = createContext();

FavoritosContext.displayName = "Favoritos";

export function useFavoritosContext() {
    const { favorito, setFavorito } = useContext(FavoritosContext);

    function agregarFavorito(nuevoFavorito) {
        const favoritoRepetido = favorito.some(
            (item) => item.id === nuevoFavorito.id
        );

        let nuevaLista = [...favorito];
        if (!favoritoRepetido) {
            nuevaLista.push(nuevoFavorito);
            return setFavorito(nuevaLista);
        } else {
            nuevaLista = favorito.filter(item => item.id !== nuevoFavorito.id);
            return setFavorito(nuevaLista);
        }
    }
    return { favorito, agregarFavorito };
}


