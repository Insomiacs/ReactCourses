import {
  GET_MOVIES_FAILURE,
  GET_MOVIES_REQUEST,
  GET_MOVIES_SUCCESS
} from "../actions/movies";

const initialState = {
  moviesLoaded: false,
  error: null,
  items: []
};

export default (state = initialState, action) => {
  switch(action.type) {
    case GET_MOVIES_REQUEST:
      return {
        ...state,
        moviesLoaded: false
      };
    case GET_MOVIES_SUCCESS:
      return {
        ...state,
        moviesLoaded: true,
        items: action.payload
      };
    case GET_MOVIES_FAILURE:
      return {
        ...state,
        moviesLoaded: false,
        error: action.payload
      };
    default:
      return {
        ...state
      }
  }
}

