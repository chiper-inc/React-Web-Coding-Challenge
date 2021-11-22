import Modal from "../../components/Modal";

describe("App component", () => {
  test("it renders", () => {
    expect(true).toBe(true);
    expect(<Modal />).toMatchSnapshot();
  });
});
