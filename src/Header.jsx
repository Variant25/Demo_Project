// src/Header.js
import React from 'react';
import './header.css'; // Import the CSS file
import logo from './whole.png';
import searchlogo from './search-line.png';

const Header = () => {
  return (
    <>
      <div className="header1-top">
        <div className="header1-logo">
          <img src={logo} alt="ATG.WORLD" />
        </div>
        <div className="header1-search">
          <input type="text" placeholder="Search for your favorite groups in ATG" />
        </div>
        <div className="header1-account">
        <button>  <a href="/create-account">Create account. <span>It's free!</span></a></button>
         
        </div>
      </div>
      <header className="header1">
        <div className="header1-content">
          <div className="header1-text">
            <h1>Computer Engineering</h1>
            <p>142,765 Computer Engineers follow this</p>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
