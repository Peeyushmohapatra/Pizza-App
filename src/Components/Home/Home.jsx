import React from 'react'
import "./home.css"
import Sidebar from '../Sidebar/Sidebar'

const Home = () => {
  return (
    <div className='homeContainer'>
      
      <div className="rightContainer">
        <div className="innerRightcontainer">
        <div className='headingContainer'>
        <h1 className='heading'>DELIVERY TO THE</h1>
        <h1 className='heading'>DOORSTEP</h1>
        </div>
        <div className="lestContainer">
          <p><i className="fa-solid fa-check"></i>  Choose your ingredients</p>
          <p><i className="fa-solid fa-check"></i>  Get free delivery 24/7</p>
          <p><i className="fa-solid fa-check"></i>  Special gift coupons</p>
        </div>
        <div className="inputContainer">
          <input placeholder='Email' type="text" />
          <button>SUBSCRIBE</button>
        </div>
        <div className="locationContainer">
        <i className="fa-sharp fa-solid fa-location-dot"></i>
        <p>Check delivery zone</p>
        </div>
        </div>
        
      </div>
    </div>
  )
}

export default Home