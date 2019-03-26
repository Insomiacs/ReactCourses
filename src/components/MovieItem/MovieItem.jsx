import React from 'react';
import styles from './styles.scss';

const MovieItem = ({image, title, genres, releaseDate, id}) => {
    return (
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
};

export default MovieItem;
