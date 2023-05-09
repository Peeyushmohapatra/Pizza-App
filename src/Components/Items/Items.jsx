import React from 'react'
import "./items.css"
import Navbar from '../Navbar/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const Items = () => {
    const itemData = useSelector((state) => {
        return state.allproduct
    });

    const dispatch = useDispatch()

  return (
    <div className='items'>
        <div className="navbarContainer">
            <Navbar/>
        </div>
        <div className="itemsContainer">
            {itemData && itemData.map((ele) => {
                return (
                    <Link to="/productdetalis">
            <div key={ele.id} onClick={() => {
                dispatch({
                    type:"singleData",
                    data:ele
                })
            }} className="itemCard">
                <img src={ele.linkImagen ? ele.linkImagen : "https://cdn.pixabay.com/photo/2020/05/17/04/22/pizza-5179939__340.jpg"} alt="" />
                <h4 className='itemName'>{ele.nombre}</h4>
                <p className='price'>₹: <span>{ele.precio}</span></p>
            </div>
            </Link>
                )
            })}
        </div>
    </div>
  )
}

export default Items