import React from "react";
import { Paginate } from "../../components/Paginate";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("<Paginate />", () => {
  const props = { currentPage: 1, count: 10, handleChangePage: jest.fn() };
  test("render del componente Paginate", () => {
    const wrapper = mount(<Paginate {...props} />);
    expect(wrapper.length).toEqual(1);
  });
});
