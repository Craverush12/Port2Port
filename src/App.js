import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Example from "./pages/Product";
import Home from "./pages/Home";
import Seller from "./pages/SellerPage";
import SignUp from "./pages/SignUp";
import Productpage from "./pages/Productpage";
import Product from "./components/Product";
import AuctionForm from "./pages/AuctionForm";
import AuctionDetails from "./pages/AuctionDetails";
import { CartProvider } from './context/CartContext';  // Import CartProvider
import Categories1 from './pages/Categories';
import ProductPage2 from './pages/ProductPage2';

function App() {
  return (
    <CartProvider>  {/* Wrap your application with CartProvider */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auctionform" element={<AuctionForm />} />
          <Route path="/auction-details" element={<AuctionDetails />} />
          <Route path="/product1" element={<Product />} />
          <Route path="/categories" element={<Categories1 />} />
          <Route path="/sell" element={<Seller />} /> {/* Home page route */}
          <Route path="/product" element={<Example />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/Prod2" element={<ProductPage2 />} />
          {/*<Route path="/productPage" element={<Productpage />} />*/} {/* About page route */}
          {/* Contact page route */}
          {/* Add more routes for other pages */}
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
