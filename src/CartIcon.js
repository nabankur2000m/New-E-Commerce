import React from 'react';
import cartIconImage from './cart-icon.png.webp'; 

const CartIcon = ({ itemCount }) => {
  return (
    <div className="cart-icon">
      <img src={cartIconImage} alt="Cart" />
      {itemCount > 0 && <span className="item-count">{itemCount}</span>}
    </div>
  );
};

export default CartIcon;
