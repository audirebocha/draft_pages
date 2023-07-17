import React from 'react';
import './testimonials.css'; // Import the CSS file for testimonials
import '@fortawesome/fontawesome-free/css/all.css';
import profile1 from './images/p1.jpg';
import profile2 from './images/p2.jpg';
import profile3 from './images/p3.jpg';

function Testimonials() {
  return (
    <div className="testimonials">
      <div className="inner">
        <h1>Testimonials</h1>
        <div className="border"></div>

        <div className="row">
          <div className="col">
            <div className="testimonial">
              <img src={profile1} alt="Profile 1" />
              <div className="name">Brian Felix</div>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>
              <p>
                "I was looking for a place to stay in Nairobi and I found it here. I was able to find a place that was
                close to my workplace and I was able to move in immediately. I would recommend this site to anyone
                looking for a place to stay"
              </p>
            </div>
          </div>
          <div className="col">
            <div className="testimonial">
              <img src={profile2} alt="Profile 2" />
              <div className="name">Harry Magwaya</div>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p>
                "I found a perfect studio for the perfect price. I was able to move in immediately and I have been living
                there for the past 3 months. I would recommend this site to anyone looking for a place to stay"
              </p>
            </div>
          </div>
          <div className="col">
            <div className="testimonial">
              <img src={profile3} alt="Profile 3" />
              <div className="name">Valery Oley</div>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p>
                "I connected to a subletter in a matter of minutes. I would recommend this site to anyone looking for a place to stay"
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
