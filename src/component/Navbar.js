import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';  // Import the CSS for styling

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">E-Shop</Link>
        <ul className="navbar-links">
          <li><Link to="/" className="navbar-link">Home</Link></li>
          <li><Link to="/cart" className="navbar-link">Cart</Link></li>
          <li><Link to="/contact" className="navbar-link">Contact</Link></li>
          <li><Link to="/user/johnDoe" className="navbar-link">Profile</Link></li> {/* Example User */}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
