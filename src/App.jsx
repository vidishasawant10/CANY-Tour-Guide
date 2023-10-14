import React from "react"
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Footer from './Components/Footer/Footer'
import Middle from './Components/Middle/Middle'
import Places from './Components/Places/Places'
import Portfolio from './Components/Portfolio/Portfolio'
import Questions from './Components/Questions/Questions'
import Reviews from './Components/Reviews/Reviews'
import Subscribe from './Components/Subscribe/Subscribe'
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';


function App() {

  return (
   <div>
      <Navbar/>
      <Home/>
      <Middle/>
      <Places/>
      <Portfolio/>
      <Reviews/>
      <Questions/>
      <Subscribe/>
      <Footer/>  
   </div>

  )
}

export default App;
