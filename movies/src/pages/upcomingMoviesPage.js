import React, {useState, useEffect} from "react";
import {getUpcomingMovies} from "../api/tmdb-api";
import PageTemplate from "../components/templateMovieListPage";
import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";

const UpcomingMoviesPage = (props) => {
    const [movies, setMovies] = useState([]);

    const addToFavourites = (movieId) => {
        const updatedMovies = movies.map((m) => 
            m.id === movieId ? {...m, favourite: true} : m
        );
        setMovies(updatedMovies);
    };

    useEffect(() => {
        getUpcomingMovies().then(movies => {
            setMovies(movies);
        });
    }, []);
    
    return (
        <PageTemplate
            title="Upcoming Movies"
            movies={movies}
            action={(movie) => {
                return <AddToFavouritesIcon movie={movie} />
            }}
        />
    );
};

export default UpcomingMoviesPage;