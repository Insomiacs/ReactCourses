import React from 'react';
import { shallow } from 'enzyme';

import Wrapper from '../Wrapper';

describe('wrapper behavior tests', () => {
    it('should wrapper render correct', () => {
        const wrapper = shallow(
            <Wrapper
                className="test-wrapper"
            >
                <span>Some content</span>
            </Wrapper>
        );
        expect(wrapper.debug()).toMatchSnapshot()
    });
});


