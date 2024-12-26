import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Navbar from './component/Navbar';
import Home from './component/Home';
import ProductDetail from './component/ProductDetail';
import Cart from './component/Cart';
import UserProfile from './component/UserProfile';
import Contact from './component/Contact';

function App() {
  return (
    <Router>
      <Navbar />  
      <div className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/user/:username" element={<UserProfile />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
