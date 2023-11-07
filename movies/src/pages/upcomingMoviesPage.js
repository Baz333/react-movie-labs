import React, {useState, useEffect} from "react";
import {getUpcomingMovies} from "../api/tmdb-api";
import PageTemplate from "../components/templateMovieListPage";
import {useQuery} from 'react-query';
import Spinner from '../components/spinner';
import AddToWatchlistIcon from "../components/cardIcons/addToWatchlist";

const UpcomingMoviesPage = (props) => {
    const {data, error, isLoading, isError} = useQuery('upcoming', getUpcomingMovies)

    if(isLoading) {
        return <Spinner />;
    }

    if(isError) {
        return <h1>{error.message}</h1>;
    }

    const movies = data.results;
    console.log("Movies: ", movies);
    
    return (
        <PageTemplate
            title="Upcoming Movies"
            movies={movies}
            action={(movie) => {
                return <AddToWatchlistIcon movie={movie} />
            }}
        />
    );
};

export default UpcomingMoviesPage;