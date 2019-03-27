import React from 'react';
import styles from './styles.scss';
import PropTypes from 'prop-types';

const Movie = ({image, title, genres, releaseDate}) => (
    <div className={styles.movieItem}>
        <img className={styles.poster} src={image} alt=""/>
        <div className={styles.movieInfo}>
            <div>
                <span className={styles.movieTitle}>{title}</span>
                {
                    genres.map((item, index) =>
                        <span
                            className={styles.movieGenres}
                            key={index}
                        >
                            {item}
                        </span>)
                }
            </div>
            <span className={styles.releaseDate}>{releaseDate}</span>
        </div>
    </div>
);

export default Movie;

Movie.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    genres: PropTypes.array,
    releaseDate: PropTypes.string,
};
