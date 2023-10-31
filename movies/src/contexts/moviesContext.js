import Favorite from "@mui/icons-material/Favorite";
import React, {useState} from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
    const [favourites, setFavourites] = useState([])

    const addToFavourites = (movie) => {
        let newFavourites = [];
        if(!favourites.includes(movie.id)) {
            newFavourites = [...favourites, movie.id];
        }
        else {
            newFavourites = [...favourites];
        }
        setFavourites(newFavourites)
    };

    const removeFromFavourites = (movie) => {
        setFavourites(favourites.filter(
            (mId) => mId !== movie.id
        ))
    };
    
    return(
        <MoviesContext.Provider
            value={{
                favourites,
                addToFavourites,
                removeFromFavourites
            }}
        >
            {props.children}
        </MoviesContext.Provider>
    );
};

export default MoviesContextProvider;