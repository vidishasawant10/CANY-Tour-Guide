import React from 'react';
import './Subscribe.css';

import image from '../../Assets/Contact.png';
const Subscribe = () => {
  return (
    <div className='subscribe section container'>
      <div className="secContainer grid">
        <img src= {image} alt= "Div Image"/>
        <div className="textDiv">
          <h4> Best Way to Start your Journey!</h4>
          <p>We offer personalized iterneraies tailored to individual preferences and interests.</p>
          <button className="btn">
            Start Here
          </button>
        </div>
      </div>
    </div>
  )
};

export default Subscribe;