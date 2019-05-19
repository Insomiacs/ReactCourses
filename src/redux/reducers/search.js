import { UPDATE_SEARCH_QUERY, UPDATE_SEARCH_TYPE } from '../actions/search';

const initialState = {
  type: 'title',
  searchQuery: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.payload,
      };
    case UPDATE_SEARCH_TYPE:
      return {
        ...state,
        type: action.payload,
      };
    default:
      return state;
  }
};
