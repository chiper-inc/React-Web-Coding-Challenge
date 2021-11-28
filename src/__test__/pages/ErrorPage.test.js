import React from "react";
import { ErrorPage } from "../../pages/ErrorPage";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("<ErrorPage />", () => {
  test("render de la pagina ErrorPage", () => {
    const wrapper = shallow(<ErrorPage />);
    expect(wrapper.length).toEqual(1);
  });
});
