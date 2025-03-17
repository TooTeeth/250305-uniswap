import { BrowserRouter, Route, Routes } from "react-router-dom";
import SwapPage from "./pages/SwapPage";
import LiquidityPage from "./pages/LiquidityPage";
import Layout from "./components/Layout";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/liquidity" element={<LiquidityPage />} />
          <Route path="/swaptoken" element={<SwapPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
