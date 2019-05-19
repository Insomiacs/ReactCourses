import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from "react-router-dom";
import { withRouter } from 'react-router-dom';

import { loadMovie } from "../../../../redux/actions/movie";
import Wrapper from '../../../../SharedComponents/Wrapper';
import styles from './style.scss';

class MovieCard extends Component {
    state = {
        selectedId: null
    };
    componentDidMount() {
        const { params } = this.props.match;
        this.props.loadMovie(params.id).then(this.setState({
            selectedId: params.id
        }));
    }

    static getDerivedStateFromProps(nextProps, prevState){
        const { params } = nextProps.match;
        const { selectedId } = prevState;
        if(params.id !== selectedId) {
            nextProps.loadMovie(params.id);
            return {
                selectedId: params.id
            }
        }
        return null;
    }

    render() {
        const { selectedMovie } = this.props;
        return (
            <div className={styles.movieCard}>
                <div className={styles.overlay}>
                    <Wrapper className={styles.movieCardWrapper}>
                        <Link to="/" className={styles.searchBtn}>Search</Link>
                        {!selectedMovie.id ?
                            <span className={styles.notFoundMovie}>This movie doesn't exists</span> :
                            <div className={styles.movieInfo}>
                                <div>
                                    <img className={styles.moviePoster} src={selectedMovie.poster_path} alt=""/>
                                </div>
                                <div>
                                    <h1 className={styles.movieTitle}>{selectedMovie.title}</h1>
                                    <div className={styles.movieDescription}>{selectedMovie.release_date}</div>
                                    <div className={styles.movieDescription}>{selectedMovie.overview}</div>
                                </div>
                            </div>
                        }
                    </Wrapper>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({movie}) => ({
    movieLoaded: movie.movieLoaded,
    selectedMovie: movie.selectedMovie
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    loadMovie
}, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MovieCard));
