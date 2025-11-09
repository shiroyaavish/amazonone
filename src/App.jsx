import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetailPage from "./components/ProductDetailPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WishlistPage from "./components/Wishlist";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:slug" element={<ProductDetailPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
      </Routes>
      <Footer />
    </Router>
  )
}
