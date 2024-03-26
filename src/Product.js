import React from 'react';

const Product = ({ id, title, price, imageUrl, addToCart }) => {
  return (
    <div className="product-card">
      <img src={imageUrl} alt={title} className="product-image" />
      <div className="product-info">
        <h3 className="product-title">{title}</h3>
        <p className="product-price">${price.toFixed(2)}</p>
        <button className="btn-add-to-cart" onClick={addToCart}>ADD TO CART</button>
      </div>
    </div>
  );
};

export default Product;
