import React from 'react'
import './Places.css'
import {MdLocationPin} from 'react-icons/md'
import {BsCreditCardFill} from 'react-icons/bs'
import {BsFillCalendarDateFill} from 'react-icons/bs'
import {BiSearchAlt2} from 'react-icons/bi'
import {TiLocation} from 'react-icons/ti'

import image1 from '../../Assets/SanFranscisoBridge.webp'

const Places = () => {
  return (
    <div className='places section container'>
      <div className="secContainer">
        <div className="">
          <span className='redText'>Explore Now</span>
          <h3>Find Your Dream Place</h3>
          <p>Fill in the fields below to find the best spot for your next tour.</p>
        </div>
        <div className="searchField grid">
          <div className="inputField flex">
          <MdLocationPin className='icon'/>
          <input type = 'text' placeholder ='Location'/>
          </div>

          <div className="inputField flex">
          <BsCreditCardFill className='icon'/>
          <input type = 'text' placeholder ='Budget'/>
          </div>

          <div className="inputField flex">
          <BsFillCalendarDateFill className='icon'/>
          <input type = 'text' placeholder ='Date'/>
          </div>
          <button className='btn flex'>
            <BiSearchAlt2 className ='icon'/>
            Search
          </button>
        </div>
        <div className="secMenu">
          <ul className='flex'>
            <li className='active'>All</li>
            <li>Recommended</li>
            <li>Beach</li>
            <li>Park</li>
            <li>Nature</li>
            <li>Mountain</li>
            <li>Restraunt</li>
          </ul>
        </div>

        <div className="placesContainer grid">
          <div className="singlePlace">
            <div className="imgDiv">
              <img src={image1} alt = 'Place Image'></img>
              <div className="placeInfo flex">
                <div className="text">
                  <span className='name'>
                    San Franscisco Bridge
                  </span>
                  <p className='flex'> 
                  <TiLocation className = 'icon'/>
                  San Franscisco, California
                  </p>
                  </div>
                  <span className="rating">
                    4.6
                  </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Places;