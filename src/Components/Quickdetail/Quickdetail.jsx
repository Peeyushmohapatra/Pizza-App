import React from "react";
import "./Quickdetail.css";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Quickdetail = () => {
  const itemData = useSelector((state) => {
    return state.singleProduct;
  });

  const navigate = useNavigate()
  return (
    <div className="quickdetail">
      <div className="finalDetailcontainer">
        <button  onClick={() => {
            navigate("/home")
          }}  className="button">
          <i className="fa-solid fa-xmark"></i>
        </button>
        <div className="leftDiv">
        <img src={itemData.linkImagen ? itemData.linkImagen : "https://cdn.pixabay.com/photo/2020/05/17/04/22/pizza-5179939__340.jpg"} alt="" />

        </div>
        <div className="rightDiv">
          <h2>{itemData.nombre}</h2>
          <h3>Price: {itemData.precio}</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem
            ratione facilis alias saepe porro impedit totam voluptatibus magnam,
            rerum, nihil iure recusandae, obcaecati ex? Tenetur et repellendus
            totam debitis deserunt omnis impedit incidunt qui, provident
            cupiditate saepe, quos sint amet!
          </p>

          <p>{itemData.descripcion}</p>
          
          <Link to="/order">
          <button className='button-one'>ADD TO CART</button>
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default Quickdetail;
