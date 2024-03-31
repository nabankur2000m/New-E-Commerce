import React, { useState } from 'react';
import ContactUs from './ContactUs';
import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom';
import ProductDetailPage from './ProductDetailPage';
import Cart from './Cart';
import Header from './Header';
import Home from './Home';
import ProductList from './ProductList';
import About from './About';
import './App.css';
import Login from './login'
import { AuthProvider } from './AuthContext';

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

  const addToCart = (product) => {
    setCart([...cart, product]);
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
          <Route path="/products" element={<ProductList products={productsArr} addToCart={addToCart} />} />
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