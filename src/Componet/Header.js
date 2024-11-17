// src/components/Header.js
import React from 'react';
import './Header.css';  // You can add your own CSS to style

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>JobPortal</h1>
      </div>
      <nav>
        <ul>
          <li><a href="#jobs">Find Jobs</a></li>
          <li><a href="#companies">Companies</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
