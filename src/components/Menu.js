import React from 'react'

const Menu = () => {
  return (
    <div className="about">
         <div className='container'>
        <div className='row'>
          <div className='col-6'>
             <div className='abt_img'>
                <img src="/img/pizza.jpg" alt="Pizza"/>
             </div>
          </div>
          <div className='col-6 p-25'>
            <h3>Pizza Menu</h3>
            <h1>CHICAGO THIN CRUST</h1>
            <p>
            Pizza al taglio or pizza al trancio was invented in Rome. 
            It is usually rectangular, and sold by weight. 
            It is also common in other areas of the world where there are many Italian immigrants.
            </p>
            <div className='abt_btn'>
            <a href="" className="btn btn-smart">VIEW MORE</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu
