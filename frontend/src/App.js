import Navbar from "./components/Navbar";
import Home from "./pages/home";
import Cart from "./pages/cart";
import Inventory from "./pages/inventory";
import History from "./pages/history";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </div>
  );
}

export default App;
