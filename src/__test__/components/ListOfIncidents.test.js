import React from "react";
import { ListOfIncidents } from "../../components/ListOfIncidents";
import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("<ListOfIncidents />", () => {
  test("render del componente ListOfIncidents", () => {
    const incidents = [
      {
        date_stolen: null,
        description: "",
        frame_colors: ["Silver, gray or bare metal"],
        frame_model: "1500",
        id: 1192680,
        is_stock_img: false,
        large_img: null,
        location_found: null,
        manufacturer_name: "Trek",
        external_id: null,
        registry_name: null,
        registry_url: null,
        serial: "Hidden",
        status: null,
        stolen: false,
        stolen_location: null,
        thumb: null,
        title: "Trek 1500",
        url: "https://bikeindex.org/bikes/1192680",
        year: null,
      },
    ];
    const wrapper = mount(<ListOfIncidents incidents={incidents} />);
    expect(wrapper.length).toEqual(1);
  });
});
