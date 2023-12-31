import React from 'react';
import './Home.css';
import Video from '../../Assets/Background.mp4'
import {BsArrowRight} from 'react-icons/bs'

const Home = () => {
  return(
    <div className="Home">
      <div className ="videoBg">
      <video src ={Video} autoPlay loop muted></video>
      </div>
      <div className='sectionText'>
      <h1> Unlock your track</h1>
        <p>Discover the world's most adventourous nature,
          life is short for a trip.
        </p>
        <button className='btn flex'>GET STARTED <BsArrowRight className='icon'/></button>
      </div>
      <div className="popularPlaces">
        <div className="content">
          <h3>Popular Places</h3>
          <div className="images flex">
            {/*<img src="" alt="" />*/}
            {/*<img src="" alt="" />*/} 
            {/*<img src="" alt="" />*/}
            {/*<img src="" alt="" />*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;