import {
  UPDATE_SEARCH_QUERY, UPDATE_SEARCH_TYPE, updateSearchQuery, selectSearchType,
} from '../search';


describe('search query actions test', () => {
  it('should create an action to update search query', () => {
    const expectedAction = {
      type: UPDATE_SEARCH_QUERY,
      payload: '1233',
    };
    expect(updateSearchQuery('1233')).toEqual(expectedAction);
  });

  it('should create an action to update search type', () => {
    const expectedAction = {
      type: UPDATE_SEARCH_TYPE,
      payload: 'title',
    };
    expect(selectSearchType('title')).toEqual(expectedAction);
  });
});
