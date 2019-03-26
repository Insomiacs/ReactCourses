import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Movie from '../Movie';
const Movies = ({movies}) => (
    <Fragment>
        {
            movies.map(movie =>
                <Movie
                    image={movie.poster_path}
                    title={movie.title}
                    genres={movie.genres}
                    releaseDate={movie.release_date}
                    key={movie.id}
                />
            )
        }
    </Fragment>
);

export default Movies;

Movies.propTypes = {
    movies: PropTypes.array,
};
