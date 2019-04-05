import React from 'react';
import { shallow } from 'enzyme';

import Preloader from '..';

it('should wrapper render correct', () => {
    const wrapper = shallow(<Preloader/>);
    expect(wrapper.debug()).toMatchSnapshot()
});
