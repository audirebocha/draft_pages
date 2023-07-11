import React from 'react';
import './header.css';
// import Logo from './assets/Logo.png';

function Header() {
  return (
    <header className="header">
      {/* <div className="Logo">
        <img src={Logo} alt="Logo" />
        </div> */}
      <div className="header-content">

        <h1 className="header-title">Your one stop website for subletting needs</h1>
        <p className="header-text">Discover the perfect subletting experience</p>
        <button className="header-button">Get Started</button>
      </div>
    </header>
  );
}

export default Header;
