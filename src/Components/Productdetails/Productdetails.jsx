import React from 'react'
import "./Productdetails.css"
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Productdetails = () => {
    const itemData = useSelector((state) => {
        return state.singleProduct
    });
  return (
    <div className='productdetails'>
        
            <img src={itemData.linkImagen ? itemData.linkImagen : "https://cdn.pixabay.com/photo/2020/05/17/04/22/pizza-5179939__340.jpg"} alt="" />
            <h4>{itemData.nombre}</h4>
            <h3>₹ {itemData.precio}</h3>
            <div className="buttonsContainer">
                <Link to="/order">
                <button className='button-1'>ADD TO CART</button>
                </Link>
                <Link to="/quickdetail">
                <button className='button-2'>QUICK VIEW</button>
                </Link>
            </div>
        
    </div>
  )
}

export default Productdetails