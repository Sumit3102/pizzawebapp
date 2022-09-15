import React from 'react'
import Navbar from './Navbar';

const Header = () => {
  return (
    <div className = "banner">
    <Navbar/>
      <div className = 'banner__content'>
        <div className='container'>
          <div className='banner__text'>
            <h3>Pizza Delivery</h3>
            <h1>MAESTRO PIZINNI</h1>
            <p>Are you wondering why there’s a pizza slice in both of my hands? 
            This is what I call a well-balanced meal.</p>
            <div className='banner_btn'>
                <a href="" className='btn btn-smart'>DELIVERY NOW</a>
            </div>
          </div>    
        </div>
      </div>  
    </div>
  )
}

export default Header;
