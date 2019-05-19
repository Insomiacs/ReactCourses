import React, { Fragment } from 'react';
import MovieCard from "../App/components/Movies/MovieCard";
import MoviesContent from "../App/components/MoviesContent";

const MovieDetails = () => {
    return (
        <Fragment>
            <MovieCard />
            <MoviesContent />
        </Fragment>
    );
};

export default MovieDetails;
