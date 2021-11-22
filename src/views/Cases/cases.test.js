import { QueryClient, QueryClientProvider } from "react-query";
import { MemoryRouter } from 'react-router-dom';
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import CasesView from "./index";

test('Render CasesView', () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  })

  render(
    <QueryClientProvider client={queryClient}>
      <MemoryRouter>
        <CasesView title="Cases" />
      </MemoryRouter>
   </QueryClientProvider>
  );
});
