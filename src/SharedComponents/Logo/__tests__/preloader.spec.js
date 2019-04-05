import React from 'react';
import { shallow } from 'enzyme';

import Logo from '../Logo';

it('should Logo render correct', () => {
    const wrapper = shallow(<Logo/>);
    expect(wrapper.debug()).toMatchSnapshot()
});
