import React from 'react';
import './Questions.css';

const Questions = () => {
  return (
    <div className ='questions section container'>
      <div className="secHeading">
        <h3>Frequently Asked Question</h3>
      </div>
      <div className="secContainer grid">
        <div className="accordion grid">

        </div>
        <div className="form">
          <div className="secHeading">
            <h4>Do you have any specific question?</h4>
            <p>Please fill the form below and our dedicated team 
              will get in touch with you as soon as possible</p>
          </div>
          <div className="formContent grid">
            <input type='email' placeholder='Enter email address'/>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Questions;