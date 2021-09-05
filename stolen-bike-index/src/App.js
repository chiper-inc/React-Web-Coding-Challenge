import React from "react";
import { Route } from "react-router";
import "./App.css";
import { Footer, Navbar } from "./components/layout";
import { Home } from "./components/views";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    // <div className="App">
    // </div>
    <QueryClientProvider client={queryClient}>
      <div className="noFooter">
        <Route path="/" component={Navbar} />
        <Route path="/" component={Home} />
      </div>
      <Route path="/" component={Footer} />
    </QueryClientProvider>
  );
}

export default App;
