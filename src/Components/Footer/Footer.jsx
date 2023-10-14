import React from 'react';
import './Footer.css';
import {BsFacebook} from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="secContainer container grid">
        <div className="logoDiv">
          <div className="footerLogo">
            <span>CANY - Tour Guide</span>
          </div>
          <div className="socials flex">
            <BsFacebook className='icon'/>
            <BsInstagram  className='icon' />
          </div>
          </div>
          <div className="footerLinks">
            <span className="linkTitle">
              Information
            </span>
            <li>
              <a href='#'>Home</a>
            </li>
            <li>
              <a href='#'>Explore</a>
            </li>
            <li>
              <a href='#'>Travel </a>
            </li>
            <li>
              <a href='#'>Blog</a>
            </li>
          </div>
          <div className="footerLinks">
            <span className="linkTitle">
              Helpful Links
            </span>
            <li>
              <a href='#'>Destination</a>
            </li>
            <li>
              <a href='#'>Support</a>
            </li>
            <li>
              <a href='#'>Travel & Condition</a>
            </li>
            <li>
              <a href='#'>Privacy</a>
            </li>
          </div>

          <div className="footerLinks">
            <span className="linkTitle">Contact Details</span>
            <span className="linkTitle">+12478372537</span>
            <span className="linkTitle">vidishasawantv@gmail.com</span>
            </div>
        </div>
      </div>
  )
};

export default Footer;