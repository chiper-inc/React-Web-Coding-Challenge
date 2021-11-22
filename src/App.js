import { QueryClient, QueryClientProvider } from "react-query";
import PrimarySearchAppBar from "../src/components/Header";
import SimpleContainer from "../src/containers/ListBikes";
import "./App.css";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <PrimarySearchAppBar />
        <SimpleContainer />
      </QueryClientProvider>
    </div>
  );
}

export default App;
