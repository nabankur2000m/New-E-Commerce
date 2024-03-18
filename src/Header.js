import React from 'react';

const Header = ({ cartItemCount }) => {
  return (
    <header>
      <nav>
        <div>HOME</div>
        <div>STORE</div>
        <div>ABOUT</div>
        <div>
          <i className="fas fa-shopping-cart"></i>
          <span>{cartItemCount}</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
