import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-heading">Welcome to Our E-Commerce Platform</h1>
      <p className="home-description">Explore our wide range of products:</p>
      <div className="product-list">
        <Link to="/product/1" className="product-item">Product 1</Link>
        <Link to="/product/2" className="product-item">Product 2</Link>
        <Link to="/product/3" className="product-item">Product 3</Link>
      </div>
      <div className="home-footer">
        <Link to="/cart" className="home-cart-link">Go to Cart</Link>
      </div>
    </div>
  );
}

export default Home;
