import React, { useEffect, useState } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      const userEmail = localStorage.getItem('userEmail'); 
      if (!userEmail) return; 
      
      const apiUrl = `https://crudcrud.com/api/a25554536d07468385425f4d4845936b/cart${encodeURIComponent(userEmail)}`;
      
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Could not fetch cart items');
        }
        const data = await response.json();
        setCartItems(data);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchCartItems();
  }, []);

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cartItems.length > 0 ? (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              <img src={item.imageUrl} alt={item.title} width="50" height="50" />
              <span>{item.title} - ${item.price}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
