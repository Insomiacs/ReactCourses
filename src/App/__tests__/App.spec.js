import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';

describe('App behavior tests', () => {
  it('should app render correct', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
