import React from 'react';
import styles from './styles.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

type MovieProps = {
    image: PropTypes.string,
    title: PropTypes.string,
    genres: PropTypes.array,
    releaseDate: PropTypes.string,
}

const Movie = (props: MovieProps) => (
    <div className={styles.movieItem}>
        <Link to={`/film/${props.id}`}>
            <img className={styles.poster} src={props.image} alt=""/>
            <div className={styles.movieInfo}>
                <div>
                    <span className={styles.movieTitle}>{props.title}</span>
                    {
                        props.genres.map((item, index) =>
                            <span
                                className={styles.movieGenres}
                                key={index}
                            >
                            {item}
                        </span>)
                    }
                </div>
                <span className={styles.releaseDate}>{props.releaseDate}</span>
            </div>
        </Link>
    </div>
);

export default Movie;
