import React from 'react'
import "./maincontainer.css"
import Home from '../Home/Home'
import Items from '../Items/Items'
import Sidebar from '../Sidebar/Sidebar'

const Maincontainer = () => {
  return (
    <div className='mainContainer'>
        <div className="mainLeftcontainer">
        
        <Sidebar/>

        </div>
        <div className='mainRightcontainer'>
        <Home/>
        <Items/>
        </div>
    </div>
  )
}

export default Maincontainer