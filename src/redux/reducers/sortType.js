import { UPDATE_SORT_TYPE } from '../actions/sort';

const initialState = {
  type: 'vote_average',
};

export default (state = initialState, action) => {
  if (action.type === UPDATE_SORT_TYPE) {
    return {
      ...state,
      type: action.payload,
    };
  }
  return state;
};
