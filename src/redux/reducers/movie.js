import {
  LOAD_MOVIE_FAILURE,
  LOAD_MOVIE_SUCCESS,
  LOAD_MOVIE_REQUEST,
} from '../actions/movie';

const initialState = {
  movieLoaded: false,
  error: null,
  selectedMovie: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_MOVIE_REQUEST:
      return {
        ...state,
        movieLoaded: false,
      };
    case LOAD_MOVIE_SUCCESS:
      return {
        ...state,
        movieLoaded: true,
        selectedMovie: action.payload,
      };
    case LOAD_MOVIE_FAILURE:
      return {
        ...state,
        movieLoaded: false,
        error: action.error.message,
      };
    default:
      return state;
  }
};
