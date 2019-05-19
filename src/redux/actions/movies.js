import axios from 'axios';

export const GET_MOVIES_REQUEST = 'GET_MOVIES_REQUEST';
export const GET_MOVIES_SUCCESS = 'GET_MOVIES_SUCCESS';
export const GET_MOVIES_FAILURE = 'GET_MOVIES_FAILURE';

export const loadMovies = () => (dispatch) => {
  dispatch({
    type: GET_MOVIES_REQUEST,
  });
  return axios.get('http://react-cdp-api.herokuapp.com/movies')
    .then((response) => {
      dispatch({
        type: GET_MOVIES_SUCCESS,
        payload: response.data.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_MOVIES_FAILURE,
        payload: error,
      });
    });
};
