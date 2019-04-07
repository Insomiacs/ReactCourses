import { shallow } from "enzyme";
import React from "react";

import Header from "../Header";

it('should render correct', () => {
    const wrapper = shallow(<Header/>);
    expect(wrapper.debug()).toMatchSnapshot()
});
