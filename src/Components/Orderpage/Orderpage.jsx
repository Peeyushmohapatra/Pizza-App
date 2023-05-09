import React, { useState } from 'react'
import "./Orderpage.css"
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';

const Orderpage = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [state,setState] = useState({
    email:"",
    phone:"",
    slices:"",
    inch:"",
    toppings:"",
    agree:false
  });

  function validateData(){
    if(state.email !== "" && state.phone !== "" && state.slices !== "" && state.inch !== "" && state.toppings !== "" && state.agree === true){
      dispatch({
        type:"userData",
        data:state
      })
      navigate("/success")
    }else{
      alert("Fill Data")
    }
  }
  return (
    <div className='orderpage'>
      <div className="innerOrder">
        <div className="orderInnercontainer">
          <div className="upperContainer">
            <div className="innertopContainer">
              <h2 className='h2'>WELCOME TO ITALIAN PIZZA</h2>
              <p className='pTag'>We deliver pizza in 40 minutes max. If not pizza's on us!</p>
            </div>
            <div className="innerbottomContainer">
              <form id='form' >
                <label>Email</label>
                <input onChange={(e) => {setState({...state,email:e.target.value})}} className='emailInput' type="email" required/>
                <label>Phone</label>
                <div className='phoneInput'>
                  <input onChange={(e) => {setState({...state,phone:e.target.value})}} placeholder='Area' type="number" required/><input placeholder='Local' type="number" required/><input placeholder='Local' type="number" required/>
                </div>
                <label>Number of slices</label>
                <input onChange={(e) => {setState({...state,slices:e.target.value})}} className='numberofSlices' type="number" required/>
                <label>Pizza Slice</label>
                <div className='inchesContainer'>
                  <input onChange={(e) => {setState({...state,inch:e.target.value})}} className='radio' type="radio" name='inch' value="8-inch" id="8-inch" />
                  <label>8-inch</label>
                  <input onChange={(e) => {setState({...state,inch:e.target.value})}} className='radio' type="radio" name='inch' value="10-inch" id="" />
                  <label>10-inch</label>
                  <input onChange={(e) => {setState({...state,inch:e.target.value})}} className='radio' type="radio" name='inch' value="12-inch" id="" />
                  <label>12-inch</label>
                  <input onChange={(e) => {setState({...state,inch:e.target.value})}} className='radio' type="radio" name='inch' value="14-inch" id="" />
                  <label>14-inch</label>
                </div>
                <label>Toppings</label>
                <div className='inchesContainer'>
                  <input onChange={(e) => {setState({...state,toppings:e.target.value})}} type="checkbox" name="" id="" value="Pepperoni"/>
                  <label>Pepperoni</label>
                  <input onChange={(e) => {setState({...state,toppings:e.target.value})}} type="checkbox" name="" id="" value="Onions" />
                  <label>Onions</label>

                  <input onChange={(e) => {setState({...state,toppings:e.target.value})}} type="checkbox" name="" id="" value="Mushrooms"  />
                  <label>Mushrooms</label>

                  <input onChange={(e) => {setState({...state,toppings:e.target.value})}} type="checkbox" name="" id="" value="Sausage"  />
                  <label>Sausage</label>
                </div>

                <div className='termsContainer'>
                  <span>*</span>
                  <input onChange={() => {setState({...state,agree:true})}} type="checkbox" name="" id="" required/>
                  <p>I agree to the TERMS AND CONDITIONS</p>
                </div>
              </form>
            </div>
          </div>
          <button onClick={() => {
            validateData()
          }} className='orderButton'>Order Now</button>

        </div>
      </div>
    </div>
  )
}

export default Orderpage