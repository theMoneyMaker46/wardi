import React from "react";

const productImg = {
  width: '18rem',
  height: '18rem',
  backgroundColor: '#F8FBF4'
};


const Card = ({ brand, productName, price, discountPrice, imgSrc, rating }) => {
  return (
    <div className="card" style={{ width: '18rem', textAlign: 'center' }}>
      <div>
        <img style={productImg} src={imgSrc} alt="" />
        <div className="card-body custom-card-body">
          <h6>{brand}</h6>
          <p className="productName">{productName}</p>
          <div>
          <p>Price : Rs. {discountPrice} <label className="price"><strong>{price}</strong></label> /meter</p>
          </div>
          <div>Ratings {rating.toFixed(2)}⭐
          </div>
          <br></br>
          <button className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Card;