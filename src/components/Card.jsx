import React, { useState } from "react";
import '../styles/Card.css';

const productImg = {
  width: '100%',
  backgroundColor: '#F8FBF4'
};

function Card({ handleAddToCart, ...props }) {

  const [isAddedToCart, setIsAddedToCart] = useState("Add to Cart"); // State to track whether item is added to cart

  // Function to handle adding item to cart
  const addToCart = () => {
    handleAddToCart(); // Call function to add item to cart
    setIsAddedToCart("Added to Cart !"); // Update state to indicate item is added to cart   
  };
  const maxLength = 32;

  const truncatedProductName = props.productName.length > maxLength ?
    props.productName.slice(0, maxLength) + '...' : props.productName;
  //brand, productName, price, discountPrice, imgSrc, rating

  return (
    <div className="cardSection">
      <div className="card" style={{ width: '16rem', textAlign: 'center' }}>
        <div>
          <a href={`/product/${props.id}`} className="card-link">
            <img style={productImg} src={props.imgSrc} alt="" />
          </a>
          <div className="card-body custom-card-body">
            <h6>{props.brand}</h6>
            <p className="productName">{truncatedProductName}</p>
            <div className="priceOnCard">
              <p style={{"margin":"0 0 0.5rem 0"}}>₹{props.discountPrice} <text className="price">₹{props.price}/meter</text>
              <text style={{"color":"darkorange", "fontWeight":"bold"}}>    (Rs. {props.price-props.discountPrice} off)</text>
              </p>
            </div>
            <div><p>Ratings {props.rating.toFixed(2)}⭐</p>
            </div>
            <button id="addToCart" className="btn btn-success" onClick={addToCart}>{isAddedToCart}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;