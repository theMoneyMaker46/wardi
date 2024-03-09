import React from "react";

const cardStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', /* Adjust the width as needed */
        gap: '20px'
};

function Card() {
    return (
        <div className="card cardStyle" style={{"width": "18rem", "textAlign" : "center"}}>
            <br></br>
            <div>
                <img src="/favicon.ico" alt="" />
                <div className="card-body">
                    <h3>Brand Name</h3>
                    <h4>Product Name</h4>
                    <p>Price: $10.99</p>
                    <p>discount price</p>
                    <div>ratings</div>
                    <button className="btn btn-primary">Add to Cart</button>
                </div>
            </div>
        </div>
    );
}

export default Card;