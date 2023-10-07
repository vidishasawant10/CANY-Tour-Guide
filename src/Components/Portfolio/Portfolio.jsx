import React from 'react';
import './Portfolio.css';

import icon1 from '../../Assets/protection.png'
import icon2 from '../../Assets/destination.jpg'
import icon3 from '../../Assets/online-chat.png'
import image from '../../Assets/travel.png'

const Portfolio = () => {
  return (
    <div className='portfolio section container'>
      <div className="secContainer grid">
        <div className="leftContent">
          <div className="secHeading">
            <h3>Why Should You Choose Us</h3>
            <p>We have extensive knowledge and experience
              in the travel industry.
            </p>
          </div>
          <div className="grid">
            <div className="singlePortfolio flex">
              <div className="iconDiv">
                <img src={icon1} alt ='Icon image'></img>
              </div>
              <div className="infor">
                <h4>Safety and Support</h4>
                <p>Our top priority is the safety and well-being of our clients.
                  We maintain high safety standards and have emergency Support
                  available during the trip.
                </p>
              </div>
            </div>

            <div className="singlePortfolio flex">
              <div className="iconDiv">
                <img src={icon2} alt ='Icon image'></img>
              </div>
              <div className="infor">
                <h4>Diverse Range of Destinations</h4>
                <p>Whether it's a domestic tour or an internation adventure, 
                  we cover a wide range of destinations to cater
                  to different interests and preferences.
                </p>
              </div>
            </div>

            <div className="singlePortfolio flex">
              <div className="iconDiv">
                <img src={icon3} alt ='Icon image'></img>
              </div>
              <div className="infor">
                <h4>24/7 Customer Support</h4>
                <p>Our dedicated customer support team is available
                  round the clock to address any queries or concerns before,
                  during, and after the trip.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="rightContent">
          <img src={image} alt='Image'/>
        </div>
      </div>
    </div>
  )
};

export default Portfolio;