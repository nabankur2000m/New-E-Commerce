import React from 'react';
import Product from './Product';
import { Link } from 'react-router-dom';

const ProductList = ({ products, addToCart }) => {
  return (
    <div className="product-list">
      {products.map(product => (
        <Link to={`/product/${product.id}`} key={product.id} style={{ textDecoration: 'none' }}>
          <Product {...product} addToCart={() => addToCart(product)} />
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
