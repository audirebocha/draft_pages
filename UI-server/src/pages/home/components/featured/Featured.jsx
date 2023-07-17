
import React from 'react';
import './featured.css';
import sharedBedroomsImage from './assets/shared bedrooms.jpg';
import privateBedroomsImage from './assets/Private bedrooms.jpg';
import studioImage from './assets/studio.jpg';

function Featured() {
  return (
    <div className="container1">
      <h1 className="heading">We Offer Variety</h1>
      <div className="box-container">
        <div className="box">
          <img src={sharedBedroomsImage} alt="Shared Bedrooms" />
          <h3>Shared Bedrooms</h3>
          <p>Share a room with others. We'll help you find a perfect roommate</p>
        </div>
        <div className="box">
          <img src={privateBedroomsImage} alt="Private Bedrooms" />
          <h3>Private Bedrooms</h3>
          <p>Get your own private bedroom. The perfect place to enjoy your time, on your own</p>
        </div>
        <div className="box">
          <img src={studioImage} alt="Studio" />
          <h3>Studio</h3>
          <p>
            Have a whole place to yourself, a private place which combines your sleeping area with a kitchenette and
            living area
          </p>
        </div>
      </div>
    </div>
  );
}

export default Featured;
