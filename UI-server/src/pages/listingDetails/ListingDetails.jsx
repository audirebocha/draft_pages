/* eslint-disable react/no-unknown-property */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../home/components/navbar/Navbar';

export default function ListingDetails() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    // Fetch the listings data from the server
    const fetchListings = async () => {
      try {
        const response = await axios.get('http://localhost:4000/listingDetails');
        setListings(response.data);
      } catch (error) {
        console.error('Error fetching listings:', error);
      }
    };

    fetchListings();
  }, []);

  return (
    <div>
      <Navbar />
      <h1>Listings</h1>

      <div className="card-container">
        {listings.map((listing) => (
          <Link to={`/listingDetails/${listing._id}`} key={listing._id} className="card-link">
            <div className="card">
            <img src="https://res.cloudinary.com/dhoqljhsj/image/upload/v1689091377/ltz1co5iitl4fjh8txpz.webp"></img>
              <div className='card-body'>
                  <h2>Title: {listing.title}</h2>
                  <p>Location: {listing.place}</p>
                  <p>Price: {listing.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <style jsx>{`
        .card-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          grid-gap: 20px;
         
        }

        .card-link {
          text-decoration: none;
          color: inherit;
        }

        .card {
        
          border: 1px solid #ccc;
          padding: 20px;
          background-color: #f9f9f9;
        }
        .card img{
            width: 250%;
            height: 300px;
            object-fit: cover;
            border-radius: 15px;
        }
      `}</style>
    </div>
  );
}
