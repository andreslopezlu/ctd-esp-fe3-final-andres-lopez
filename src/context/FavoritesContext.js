import { createContext, useEffect, useState } from "react";

export const FavoritesContext = createContext();

const getDataFromStorage = () => {
    const localData = localStorage.getItem("favs");
    return localData ? JSON.parse(localData) : [];
};

const setDataInStorage = (data) =>
    localStorage.setItem("favs", JSON.stringify(data));

export default function FavoritesProvider({children}){

    const [favorites, setFavorites] = useState(getDataFromStorage());

    useEffect(() => {
        setDataInStorage(favorites);
    }, [favorites]);

    const update = (fav) => setFavorites(fav);

    return(
        <FavoritesContext.Provider value={{favorites, update}}>
            {children}
        </FavoritesContext.Provider>
    )
}