import { render } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import Container from "../../containers/ListBikes";

describe("App component", () => {
  test("it renders", () => {
    const queryClient = new QueryClient();
    render(
      <QueryClientProvider client={queryClient}>
        <Container />
      </QueryClientProvider>
    );
  });
});
