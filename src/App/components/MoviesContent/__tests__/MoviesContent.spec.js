import React from 'react';
import { mount } from 'enzyme';
import thunk from 'redux-thunk';

import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import MoviesContent from '../MoviesContent';
import Movies from '../../Movies';


const mockStore = configureMockStore([thunk]);

describe('movies content behavior test', () => {
  it('should show preloader when movies not loaded', () => {
    const store = mockStore({
      movies: {
        items: [],
        moviesLoaded: false,
      },
      search: {
        type: 'title',
      },
    });
    const wrapper = mount(<Provider store={store}><MoviesContent /></Provider>);
    expect(wrapper.find(MoviesContent).find('.moviesContent').text()).toEqual('Loading...');
  });

  it('should show movies items when movies loaded', () => {
    const store = mockStore({
      movies: {
        items: [],
        moviesLoaded: true,
      },
      search: {
        type: 'genre',
      },
    });
    const wrapper = mount(<Provider store={store}><MoviesContent /></Provider>);
    expect(wrapper.find(MoviesContent).find(Movies).exists()).toBe(true);
  });
});
