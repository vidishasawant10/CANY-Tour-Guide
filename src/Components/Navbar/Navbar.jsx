import React from 'react';
import './Navbar.css';
import {BiLogoMediumOld} from 'react-icons/bi'
import {AiFillCloseCircle} from 'react-icons/ai'
import {PiDotsNineBold} from 'react-icons/pi'



const Navbar = () => {
  return (
    <div className='navBar'>
      <div className = 'logoDiv'>
        <span>CANY - Tour Guide</span>
      </div>
        <div className='menu'>
          <ul>
            <li className='navList'>Places</li>
            <li className='navList'>About Us</li>
            <li className='navList'>Testimonial</li>
            <li className='navList'>Gallery</li>
          </ul>
          <AiFillCloseCircle className='icon'/>
        </div>
        <button className="signUpBtn btn">Sign Up</button>
        <PiDotsNineBold className ='icon'/>
    </div>
  )
};

export default Navbar;