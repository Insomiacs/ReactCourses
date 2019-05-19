import React from 'react';
import { shallow } from 'enzyme';

import Input from '../Input';

describe('Input behavior tests', () => {
  it('should render correct', () => {
    const wrapper = shallow(
      <Input
        onChange={jest.fn()}
      />,
    );
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it('should onChange props work correct', () => {
    const changeMock = jest.fn();

    const wrapper = shallow(
      <Input
        onChange={changeMock}
      />,
    );

    const event = {
      preventDefault() {},
      target: { value: 'the-value' },
    };

    wrapper.find('input').simulate('change', event);
    expect(changeMock).toBeCalledWith('the-value');
  });
});
