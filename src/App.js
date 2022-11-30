import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import ClockApp from "./clock/ClockApp";
import About from "./About";
import Login from "./login/Login";
import AllProducts from "./AllProducts";

import Cart from "./components/cart/Cart";

function App() {
  return (
    <div>
      <div className="clockFix">
        <ClockApp />
      </div>
      <Router>
        <nav>
          <Link to="/" className="link">
            Home
          </Link>
          <Link to="/products" className="link">
            Products
          </Link>
          <Link to="/about" className="link">
            About
          </Link>
          <Link to="/login" className="link">
            Login
          </Link>
          <Cart />
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
