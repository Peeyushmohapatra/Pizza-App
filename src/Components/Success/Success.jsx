import React from 'react'
import "./Success.css"
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Success = () => {
    const navigate = useNavigate()
    const user = useSelector((state) => {
        return state.userData
    });

    console.log(user);
  return (
    <div className='successPage'>
        <p className="watermark">OREDR PAGE</p>
        <div className="orderPage">
            <img src="https://th.bing.com/th/id/OIP.CYBrvkNbS90qCKiXS8vYuwAAAA?w=222&h=218&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
            <div className="userDetails">
            <p className='name'>Name: <span className='userData'>{user.email}</span></p>
            <p className='inch'>Size: <span className='userData'>{user.inch}</span></p>
            <p className='contact'>Contact: <span className='userData'>{user.phone}</span></p>
            <p className='slices'>Number of slices: <span className='userData'>{user.slices}</span></p>
            <p className='toppings'>Toppings: <span className='userData'>{user.toppings}</span></p>
            </div>

            <i className="tick fa-solid fa-circle-check fa-bounce"> Order Placed <span className='userData'>"{user.email}"</span></i>
        <button onClick={() => {
            navigate("/home")
        }} className='homepage'>Back To Home</button>

        </div>
    </div>
  )
}

export default Success