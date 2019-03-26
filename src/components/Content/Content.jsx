import React, {Component} from 'react';
import Preloader from '../Preloader';
import Wrapper from '../Wrapper';
import MovieItem from '../MovieItem';

import styles from './style.scss'

class Content extends Component {
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
                    <div className={styles.searchContent}>
                        { !movies ? <Preloader/> : movies.data.map(item => (
                            <MovieItem
                                image={item.poster_path}
                                title={item.title}
                                genres={item.genres}
                                releaseDate={item.release_date}
                                key={item.id}
                            />
                        ))}
                    </div>
                </Wrapper>
            </div>
        );
    }
}

export default Content;
