import Navbar from "./components/Navbar";
import Home from "./pages/home";
import Cart from "./pages/cart";
import Inventory from "./pages/inventory";
import Orders from "./pages/orders";
import OrderConfirmed from "./pages/orderConfirmed";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/confirmed" element={<OrderConfirmed />} />
      </Routes>
    </div>
  );
}

export default App;
