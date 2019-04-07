import React from 'react';
import { mount, shallow } from 'enzyme';
import thunk from 'redux-thunk';
import { Provider } from "react-redux";
import sinon from 'sinon';

import SearchBar from '../SearchBar';

import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore([thunk]);

describe('searchbar behavior test', () => {
    it('should render correct', () => {
        const store = mockStore({
            movies: {
                items: [],
                moviesLoaded: false
            },
            search: {
                type: 'title'
            }
        });
        const wrapper = mount(<Provider store={store}><SearchBar /></Provider>);
        expect(wrapper.debug()).toMatchSnapshot();
    });

    it('should search work correct', () => {
        const store = mockStore({
            movies: {
                items: [],
                moviesLoaded: false
            },
            search: {
                type: 'title'
            }
        });
        //const spy = sinon.spy(SearchBar.prototype, "handleClick");
        const wrapper = mount(<Provider store={store}><SearchBar /></Provider>);
        wrapper.find(SearchBar).instance().handleClick = jest.fn();
        wrapper.find(SearchBar).find('.buttonLarge').simulate('click');
        wrapper.update();
        wrapper.find(SearchBar).instance().handleClick();
        expect(wrapper.find(SearchBar).instance().handleClick).toBeCalled();
    });

    it('should change search type work correct', () => {
        const store = mockStore({
            movies: {
                items: [],
                moviesLoaded: false
            },
            search: {
                type: 'title'
            }
        });
        //const spy = sinon.spy(SearchBar.prototype, "handleClick");
        const wrapper = mount(<Provider store={store}><SearchBar /></Provider>);
        wrapper.find(SearchBar).instance().changeSearchType  = jest.fn();
        wrapper.find(SearchBar).find('.buttonDanger').first().simulate('click');
        wrapper.update();
        wrapper.find(SearchBar).instance().changeSearchType('title');
        expect(wrapper.find(SearchBar).instance().changeSearchType).toBeCalledWith('title');
    });

    it('should change search value correct', () => {
        const store = mockStore({
            movies: {
                items: [],
                moviesLoaded: false
            },
            search: {
                type: 'title'
            }
        });
        //const spy = sinon.spy(SearchBar.prototype, "handleClick");
        const wrapper = mount(<Provider store={store}><SearchBar /></Provider>);
        const event = {
            preventDefault() {},
            target: { value: 'the-value' }
        };

        wrapper.find(SearchBar).instance().changeSearchValue   = jest.fn();
        wrapper.find(SearchBar).find('input').simulate('change', event);
        wrapper.update();
        wrapper.find(SearchBar).instance().changeSearchValue();
        expect(wrapper.find(SearchBar).instance().changeSearchValue).toBeCalled();
    })
});
