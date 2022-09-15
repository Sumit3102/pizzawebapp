import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar">
       <div className="navbar__text">
          <div className="logo"><img src="/img/logo.png" alt="logo"/></div>
          <ul className='navbar_ul'>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Menu</a>
            </li>
            <li>
              <a href="">Shop</a>
            </li>
            <li>
              <a href="">News</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
       </div>
      
    </div>
  )
}

export default Navbar
