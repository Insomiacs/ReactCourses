import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';

import Preloader from '../../../SharedComponents/Preloader';
import Wrapper from '../../../SharedComponents/Wrapper';
import Movies from '../Movies';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getMovies } from "../../../redux/selectors/sortMovies";
import { loadMovies } from '../../../redux/actions/movies';
import { updateSortType } from '../../../redux/actions/sort';

import styles from './style.scss'

type MoviesContentProps = {
    movies: Array,
    loadMovies: function,
    sortType: string,
}

class MoviesContent extends Component<MoviesContentProps> {

    componentDidMount() {
        this.props.loadMovies();
    }

    updateSortType = (type: string) => () => {
        this.props.updateSortType(type)
    };

    render() {
        const { movies, sortType } = this.props;
        return (
            <div>
                <div className={styles.searchInfo}>
                    <Wrapper>
                        <div className={styles.resultWrapper}>
                            <span className={styles.result}>{movies.items.length} movies found</span>
                            <div className={styles.sort}>
                                Sort by
                                <div
                                    className={sortType === 'release_date' ? styles.sortActive : null}
                                    onClick={this.updateSortType('release_date')}
                                >
                                    release date
                                </div>
                                <div
                                    className={sortType === 'vote_average' ? styles.sortActive : null}
                                    onClick={this.updateSortType('vote_average')}
                                >
                                    rating
                                </div>
                            </div>
                        </div>
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


const mapStateToProps = (state) => ({
    movies: {
        ...state.movies,
        items: getMovies(state)
    },
    sortType: state.sort.type
});

const mapDispatchToProps = (dispatch: function) => bindActionCreators({
    loadMovies,
    updateSortType
}, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MoviesContent));
