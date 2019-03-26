import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.scss';

const MyComponent = () => {
    return (
        <Link
            to="/"
            className={styles.logo}
        >
            netflixroulette
        </Link>
    );
};

export default MyComponent;
