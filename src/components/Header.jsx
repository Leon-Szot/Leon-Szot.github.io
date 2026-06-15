import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <span className="logo-glyph">🔥</span>
      </div>
      
      <div className="header-center">
        <span className="logo-text">JULKUK</span>
      </div>
      
      <div className="header-right">
        <div className="cart-icon">
          <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
          <span className="cart-count">0</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
