import React from 'react'
import './Places.css'
import {MdLocationPin} from 'react-icons/md'
import {BsCreditCardFill} from 'react-icons/bs'
import {BsFillCalendarDateFill} from 'react-icons/bs'
import {BiSearchAlt2} from 'react-icons/bi'
import {TiLocation} from 'react-icons/ti'

import image1 from '../../Assets/SanFranscisoBridge.webp'
import image2 from '../../Assets/Japaneseteagarden.jpg'
import image3 from '../../Assets/LakeTahoe.jpg'
import image4 from '../../Assets/napavalley.jpg'
import image5 from '../../Assets/Palmspringaerial.jpg'
import image6 from '../../Assets/McWayFalls.jpeg'
import image7 from '../../Assets/Disneyland.jpeg'
import image8 from '../../Assets/hollywoodla.jpeg'
import image9 from '../../Assets/Yosemite.webp'


//Lets create an array that is gonna contain all destination data and we loop through
const places = [
  {
    id: 1,
    img: image1,
    name: 'San Franscisco Bridge',
    location: 'San Franscisco, CA',
    rating: 4.7,
  },
  {
    id: 2,
    img: image2,
    name: 'Japanese Tea Garden',
    location: 'San Mateo, CA',
    rating: 4.7,
  },
  {
    id: 3,
    img: image3,
    name: 'Lake Tahoe',
    location: 'Sierra Nevada, CA',
    rating: 4.7,
  },
  {
    id: 4,
    img: image4,
    name: 'Napa Valley',
    location: 'Napa, CA',
    rating: 4.7,
  },
  {
    id: 5,
    img: image5,
    name: 'Palm Spring Aerial Tramway',
    location: 'Palm Springs, CA',
    rating: 4.7,
  },
  {
    id: 6,
    img: image6,
    name: 'McWay Falls',
    location: 'Big Sur, CA',
    rating: 4.7,
  },
  {
    id: 7,
    img: image7,
    name: 'Disneyland Park',
    location: 'Anaheim, CA',
    rating: 4.7,
  },
  {
    id: 8,
    img: image8,
    name: 'Hollywood Palm Trees',
    location: 'Los Angeles, CA',
    rating: 4.7,
  },
  {
    id: 9,
    img: image9,
    name: 'Yosemite National Park',
    location: 'Sierra Nevada, CA',
    rating: 4.7,
  }
]

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
          {places.map((places) => {
            return(
              <div className="singlePlace" key={places.id}>
            <div className="imgDiv">
              <img src={places.img} alt = 'Place Image'></img>
              <div className="placeInfo flex">
                <div className="text">
                  <span className='name'>
                    {places.name}
                  </span>
                  <p className='flex'> 
                  <TiLocation className = 'icon'/>
                  {places.location}
                  </p>
                  </div>
                  <span className="rating">
                    {places.rating}
                  </span>
              </div>
            </div>
          </div>
            )
          })}
          
        </div>
      </div>
    </div>
  );
}

export default Places;