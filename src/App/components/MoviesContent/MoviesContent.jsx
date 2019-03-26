import React, {Component} from 'react';
import Preloader from '../../../SharedComponents/Preloader';
import Wrapper from '../../../SharedComponents/Wrapper';
import Movies from '../Movies';

import styles from './style.scss'

class MoviesContent extends Component {
    state = {
        movies: null
    };
    componentDidMount() {
        fetch('http://react-cdp-api.herokuapp.com/movies')
            .then(response => response.json())
            .then(movies => this.setState({ movies }));
    }

    render() {
        const { movies } = this.state;
        return (
            <div>
                <div className={styles.searchInfo}>
                    <Wrapper>
                        <span className={styles.result}>7 movies found</span>
                    </Wrapper>
                </div>
                <Wrapper>
                    <div className={styles.moviesContent}>
                        { !movies ? <Preloader/> : <Movies movies={movies.data}/>}
                    </div>
                </Wrapper>
            </div>
        );
    }
}

export default MoviesContent;
