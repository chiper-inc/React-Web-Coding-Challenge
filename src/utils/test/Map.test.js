import { render } from "@testing-library/react";
import Map from "../../components/Map";

describe("App component", () => {
  test("it renders", () => {
    const google = (window.google = {
      maps: {
        places: {
          Autocomplete: class {},
        },
      },
    });
    render(<Map google={google} />);
    expect(<Map />).toMatchSnapshot();
  });
});
