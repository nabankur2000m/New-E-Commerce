import React, { useState, useEffect } from 'react';
import ContactUs from './ContactUs';
import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom';
import ProductDetailPage from './ProductDetailPage';
import Cart from './Cart';
import Header from './Header';
import Home from './Home';
import ProductList from './ProductList';
import About from './About';
import Login from './login';
import { AuthProvider } from './AuthContext';
import ProtectedRoute from './ProtectedRoute';
import './App.css';

const productsArr = [
  {
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  },
  {
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  },
  {
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  },
  {
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  }
];

const App = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const userEmail = localStorage.getItem('userEmail');
    if (!userEmail) return;
    const apiUrl = `https://crudcrud.com/api/a25554536d07468385425f4d4845936b/cart${encodeURIComponent(userEmail)}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        setCart(data);
      })
      .catch(error => console.error("Failed to fetch cart items:", error));
  }, []);

  const addToCart = async (product) => {
    const userEmail = localStorage.getItem('userEmail');
    if (!userEmail) return;
    const apiUrl = `https://crudcrud.com/api/a25554536d07468385425f4d4845936b/cart${encodeURIComponent(userEmail)}`;

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      });

      if (!response.ok) {
        throw new Error('Failed to add product to cart');
      }

    
      console.log('Product added to cart successfully');
      const updatedResponse = await fetch(apiUrl);
      const updatedData = await updatedResponse.json();
      setCart(updatedData);
    } catch (error) {
      console.error('Error adding product to cart:', error);
    }
  };
  return (
    <AuthProvider>
    <Router>
      <div className="App">
        <Header cartItemCount={cart.length} />
        <nav className="main-nav">
          <ul>
            <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/products" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>Products</NavLink>
            </li>
            
            <li>
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>About</NavLink>
            </li>
            <li> 
           <NavLink to="/login" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>Login</NavLink>
          </li>
          <NavLink to="/contact-us" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>Contact Us</NavLink>
          </ul>
</nav>
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/products" element={
    <ProtectedRoute>
      <ProductList products={productsArr} addToCart={addToCart} />
    </ProtectedRoute>
  } />
  <Route path="/about" element={<About />} />
  <Route path="/contact-us" element={<ContactUs />} /> 
  <Route path="/product/:productId" element={<ProductDetailPage />} />
  <Route path="/login" element={<Login />} />
</Routes>

        <Cart cartItems={cart} />
      </div>
    </Router>
    </AuthProvider>
  );
};

export default App;