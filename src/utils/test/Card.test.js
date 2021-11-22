import { render } from "@testing-library/react";
import Card from "../../components/Cards";

describe("App component", () => {
  test("it renders", () => {
    const title = "Titulo";
    const description="Descripcion";
    const location="Location";
    const date="Date";
    const img="URL";

    render(<Card title={title}
        description={description}
        location={location}
        date={date}
        img={img} />);
  });
});