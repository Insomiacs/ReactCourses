import { shallow } from "enzyme";
import React from "react";

import Footer from "../Footer";

it('should render correct', () => {
    const wrapper = shallow(<Footer/>);
    expect(wrapper.debug()).toMatchSnapshot()
});
