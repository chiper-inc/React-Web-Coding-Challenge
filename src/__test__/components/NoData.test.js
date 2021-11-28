import React from "react";
import { NoData } from "../../components/NoData";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("<NoData />", () => {
  test("render del componente NoData", () => {
    const wrapper = shallow(<NoData />);
    expect(wrapper.length).toEqual(1);
  });
});
