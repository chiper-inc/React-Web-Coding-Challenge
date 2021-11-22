import { Routes, Route } from "react-router-dom";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";
import Home from "./views/Home";
import Cases from "./views/Cases";
import CaseDetails from "./views/CaseDetails";

import './App.css';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cases" element={<Cases/>} />
        <Route path="/case/:id" element={<CaseDetails/>} />
      </Routes>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}
