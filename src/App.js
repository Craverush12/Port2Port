import Example from "./pages/Product";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Seller from "./pages/SellerPage";
import SignUp from "./pages/SignUp";
import Productpage from "./pages/Productpage"
import Product from "./components/Product";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product1" element={<Product />} />
        <Route path="/sell" element={<Seller />} /> {/* Home page route */}
        <Route path="/product" element={<Example />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/productPage" element={<Productpage />} /> {/* About page route */}
      {/* Contact page route */}
        {/* Add more routes for other pages */}
      </Routes>
    </Router>
  );
}

export default App;