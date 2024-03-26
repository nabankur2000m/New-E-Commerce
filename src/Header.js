import React from 'react';

const Header = ({ cartItemCount }) => {
  return (
    <header>
      <nav>
        <div>
          <i className="fas fa-shopping-cart"></i>
          <span>{cartItemCount}</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
