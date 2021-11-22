import { QueryClient, QueryClientProvider } from "react-query";
import { MemoryRouter } from 'react-router-dom';
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import CaseDetailsView from "./index";

test('Render CaseDetailsView', () => {
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
        <CaseDetailsView title="Case Details" />
      </MemoryRouter>
    </QueryClientProvider>
  );
});
