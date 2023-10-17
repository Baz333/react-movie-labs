import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {getMovie} from "../api/tmdb-api";
import MovieDetails from "../components/movieDetails/";
import PageTemplate from "../components/templateMoviePage"

const MoviePage = (props) => {
    const {id} = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        getMovie(id).then((movie) => {
            setMovie(movie);
        });
    }, [id]);

    return (
        <>
            {movie ? (
                <>
                    <PageTemplate movie={movie}>
                        <MovieDetails movie={movie} />
                    </PageTemplate>
                </>
            ) : (
                <p>Waiting for API data</p>
            )}
        </>
    );
};

export default MoviePage;