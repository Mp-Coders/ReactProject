import React, { useState } from 'react';
import '../styles/Cart.css';

function Cart() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', quantity: 2, price: 500 },
    { id: 2, name: 'Product 2', quantity: 1, price: 1000 },
  ]);

  const handleRemove = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleUpdateQuantity = (id, quantity) => {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity } : item
    ));
  };

  return (
    <div className="cart-container">
      <h1>Your Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id} className="cart-item">
              {item.name} - ₨ {item.price} x {item.quantity}
              <button onClick={() => handleRemove(item.id)}>Remove</button>
              <button onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}>Increase</button>
              <button onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}>Decrease</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
