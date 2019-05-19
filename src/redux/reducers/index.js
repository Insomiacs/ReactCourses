import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import movies from './movies';
import movie from './movie';
import search from './search';
import sort from './sortType';

export default history => combineReducers({
  router: connectRouter(history),
  movies,
  search,
  movie,
  sort,
});
