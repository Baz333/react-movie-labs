import Favorite from "@mui/icons-material/Favorite";
import React, {useState} from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
    const [favourites, setFavourites] = useState([])
    const [watchlist, setWatchlist] = useState([])
    const [myReviews, setMyReviews] = useState({})

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

    const addToWatchlist = (movie) => {
        let newWatchlist = [];
        if(!watchlist.includes(movie.id)) {
            newWatchlist = [...watchlist, movie.id];
        } else {
            newWatchlist = [...watchlist];
        }
        setWatchlist(newWatchlist);
        console.log(newWatchlist);
    }

    const addReview = (movie, review) => {
        setMyReviews({...myReviews, [movie.id]:review})
    }
    
    return(
        <MoviesContext.Provider
            value={{
                favourites,
                addToFavourites,
                removeFromFavourites,
                addToWatchlist,
                addReview
            }}
        >
            {props.children}
        </MoviesContext.Provider>
    );
};

export default MoviesContextProvider;