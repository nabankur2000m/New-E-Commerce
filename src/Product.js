import React from 'react';

const Product = ({ title, price, imageUrl, addToCart }) => {
  return (
    <div className="product">
      <h3>{title}</h3>
      <img src={imageUrl} alt={title} />
      <div>${price.toFixed(2)}</div>
      <button onClick={addToCart}>ADD TO CART</button>
    </div>
  );
};

export default Product;
