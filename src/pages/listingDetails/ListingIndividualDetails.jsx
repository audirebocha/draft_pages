import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './IndividualListing.css';
import Navbar from '../home/components/navbar/Navbar';


const IndividualListing = () => {
  const { id } = useParams();
  const [listing, setListing] = useState(null);

  useEffect(() => {
    const fetchListing = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/listingDetails/${id}`);
        setListing(response.data);
      } catch (error) {
        console.error('Error fetching listing:', error);
      }
    };

    fetchListing();
  }, [id]);

  if (!listing) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="container mt-4">
      
        <div className="card">
        <h1 className="card-title">{listing.title} - {listing.place}</h1>
          <div className='main'>
            <img src="https://res.cloudinary.com/dhoqljhsj/image/upload/v1689091377/ltz1co5iitl4fjh8txpz.webp" alt="Listing" className="card-img-top" />
            <p className="card-aside"><b>Kes  {listing.price}</b> Monthly</p>
          </div>
          <div className="card-body">
              <p className="card-text">Features: {listing.features}</p>
              <p className="card-text">Sublets: {listing.sublets}</p>
              <p className="card-text">Smoking Allowed: {listing.isSmokingAllowed ? 'Yes' : 'No'}</p>
              <p className="card-text">Pets Allowed: {listing.isPetsAllowed ? 'Yes' : 'No'}</p>
              <p className="card-text">Perks: {listing.perks}</p>
              <p className="card-text">Desc: {listing.desc}</p>
              <p className="card-text">Description: {listing.description}</p>
            </div>   
        </div>
      </div>
    </div>
  );
};

export default IndividualListing;
