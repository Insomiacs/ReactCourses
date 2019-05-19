import axios from 'axios';

export const LOAD_MOVIE_REQUEST = 'LOAD_MOVIE_REQUEST';
export const LOAD_MOVIE_SUCCESS = 'LOAD_MOVIE_SUCCESS';
export const LOAD_MOVIE_FAILURE = 'LOAD_MOVIE_FAILURE';

export const loadMovie = id => (dispatch) => {
  dispatch({
    type: LOAD_MOVIE_REQUEST,
  });
  return axios.get(`http://react-cdp-api.herokuapp.com/movies/${id}`)
    .then((response) => {
      dispatch({
        type: LOAD_MOVIE_SUCCESS,
        payload: response.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: LOAD_MOVIE_FAILURE,
        payload: error,
      });
    });
};
