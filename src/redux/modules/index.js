import { combineReducers } from 'redux';
import { connectRouter } from "connected-react-router";
import movies from './movies';
import search from './search';

export default (history) => combineReducers({
  router: connectRouter(history),
  movies,
  search
});
