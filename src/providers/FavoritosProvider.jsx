import { useState } from "react";
import { FavoritosContext } from "../context/favoritosContext";

export default function FavoritosProvider({ children }) {
    const [favorito, setFavorito] = useState([]);

    return (
        <FavoritosContext.Provider value={{ favorito, setFavorito }}>
            {children}
        </FavoritosContext.Provider>
    );
}