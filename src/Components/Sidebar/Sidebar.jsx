import React from 'react'
import "./sidebar.css"

const Sidebar = () => {
  return (
    <div className='sideBar'>
        <div className="top">
            <img src="https://donpeppe.qodeinteractive.com/wp-content/uploads/2019/10/logo-light-divided-2.png" alt="" />
        </div>
        <div className="middle">
            <li>HOME</li>
            <li>PAGES</li>
            <li>MENU</li>
            <li>EVENTS</li>
            <li>BLOG</li>
            <li>LANDING</li>
        </div>
        <div className="bottom">
            <div className="iconContainer">
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-linkedin-in"></i>
            </div>
            <div className="buttonContainer">
                <button><span>ORDER</span><span>ONLINE</span></button>
            </div>
        </div>
    </div>
  )
}

export default Sidebar