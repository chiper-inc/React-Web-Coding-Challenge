import React from "react";
import { Home } from "../../pages/Home";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import * as IncidentsContext from "../../context/IncidentsContext";

Enzyme.configure({ adapter: new Adapter() });

describe("<Home />", () => {
  test("render de la pagina Home loading true", () => {
    const contextValues = {
      loading: true,
      error: null,
      incidents: [{}],
      currentDate: "",
      setLoading: jest.fn(),
      setError: jest.fn(),
      setIncidents: jest.fn(),
      setCurrentDate: jest.fn(),
    };

    jest.spyOn(IncidentsContext, "IncidentsContextProvider").mockImplementation(() => contextValues);

    const wrapper = shallow(<Home />);
    expect(wrapper.length).toEqual(1);
  });
});
