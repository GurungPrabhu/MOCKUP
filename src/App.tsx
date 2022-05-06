import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ProductPage } from "./pages";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <ToastContainer />
        <Router>
          <Routes>
            <Route path="/" element={<ProductPage />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
