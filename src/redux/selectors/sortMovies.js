import { createSelector } from 'reselect';
import _ from 'lodash';

export const movies = state => state.movies.items;
export const searchQuery = state => state.search.searchQuery;
export const searchType = state => state.search.type;
export const sortType = state => state.sort.type;

export const getMovies = createSelector(
  movies,
  searchQuery,
  searchType,
  sortType,
  (movies, searchQuery, searchType, sortType) => { //eslint-disable-line
    const titleSearch = movies.filter(movie => movie.title.toLowerCase().includes(searchQuery.toLowerCase()));
    const genreSearch = movies.filter(movie => movie.genres.some(genre => genre.toLowerCase().includes(searchQuery.toLowerCase())));
    return searchType === 'title' ? _.sortBy(titleSearch, movie => movie[sortType]) : _.sortBy(genreSearch, movie => movie[sortType]);
  },
);
