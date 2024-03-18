import React from 'react';
import Product from './Product';

const ProductList = ({ products, addToCart }) => {
  return (
    <div className="product-list">
      {products.map(product => (
        <Product key={product.title} {...product} addToCart={() => addToCart(product)} />
      ))}
    </div>
  );
};

export default ProductList;
