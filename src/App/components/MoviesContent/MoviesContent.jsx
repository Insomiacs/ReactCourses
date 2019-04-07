import React, {Component} from 'react';
import Preloader from '../../../SharedComponents/Preloader';
import Wrapper from '../../../SharedComponents/Wrapper';
import Movies from '../Movies';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadMovies } from '../../../redux/actions/movies';

import styles from './style.scss'

class MoviesContent extends Component {

    componentDidMount() {
        this.props.loadMovies();
    }

    render() {
        const { movies } = this.props;
        return (
            <div>
                <div className={styles.searchInfo}>
                    <Wrapper>
                        <span className={styles.result}>{movies.items.length} movies found</span>
                    </Wrapper>
                </div>
                <Wrapper>
                    <div className={styles.moviesContent}>
                        { !movies.moviesLoaded ? <Preloader/> : <Movies movies={movies.items}/> }
                    </div>
                </Wrapper>
            </div>
        );
    }
}

const mapStateToProps = ({movies, search}) => {
    const titleSearch = movies.items.filter(movie => movie.title.toLowerCase().includes(search.searchQuery.toLowerCase()));
    const genreSearch = movies.items.filter(movie => movie.genres.some(genre => genre.toLowerCase().includes(search.searchQuery.toLowerCase())));
    return {
        movies: {
            ...movies,
            items: search.type === 'title' ? titleSearch : genreSearch
        },
        search,
    }
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
    loadMovies
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MoviesContent);
