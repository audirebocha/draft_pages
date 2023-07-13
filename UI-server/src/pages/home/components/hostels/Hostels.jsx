import React from 'react';
import './hostels.css';
import QwetuImage from './assets/qwetu.jpg';
import parallelImage from './assets/Parallel.jpg';
import eliteImage from './assets/elite.jpg';

function Hostels() {
  return (
    <div className="container1">
      <h1 className="heading">Hostels people Love</h1>
      <div className="box-container">
        <div className="box">
          <img src={QwetuImage} alt="Shared Bedrooms" />
          <h3>Qwetu Student Residences</h3>
          <p>Qwetu residences offer fully furnished student residencesand have the Largest community of students. </p>
        </div>
        <div className="box">
          <img src={parallelImage} alt="Private Bedrooms" />
          <h3>Parallel Four Hostels</h3>
          <p>A home away from Home. Offers high class acoomodation options</p>
        </div>
        <div className="box">
          <img src={eliteImage} alt="Studio" />
          <h3>Elite Hostels</h3>
          <p>
            Elite Hostels has over 40 branches across Kenya. Clients highly reccomend it for its affordability and convinience.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hostels;
