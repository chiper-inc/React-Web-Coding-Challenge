import { render } from "@testing-library/react";
import Alert from "../../components/Alert";

describe("App component", () => {
  test("it renders", () => {
    const myMock = jest.fn();
    myMock.mockReturnValueOnce(true).mockReturnValueOnce(false);
    const notify = {
      isOpen: true,
      message: "Mensaje",
      type: "error",
    };
    const setNotify = false;

    render(<Alert notify={notify} setNotify={setNotify} />);
  });
});
