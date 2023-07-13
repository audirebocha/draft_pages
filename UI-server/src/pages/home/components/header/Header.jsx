import React from 'react';
import './header.css';
import e from 'cors';
import { useNavigate } from 'react-router-dom';


// import Logo from './assets/Logo.png';


function Header() {
  
  const navigate = useNavigate()

    function nav(url) {
        navigate(url); 
      }

  return (

    <header className="header">
      {/* <div className="Logo">
        <img src={Logo} alt="Logo" />
        </div> */}
      <div className="header-content">

        <h1 className="header-title">Your one stop website for subletting needs</h1>
        <p className="header-text">Discover the perfect subletting experience</p>
        <button className="header-button" onClick={e=>{nav('listingDetails')}}>Get Started </button>
        
      </div>
    </header>
  );
}

export default Header;
