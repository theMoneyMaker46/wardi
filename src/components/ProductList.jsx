import React from "react";
import Card from "./Card";
import productDetails from "./ProductDetails";

const cardStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '0px',
    padding: '0 30px'
  };

function ProductList() {
    return (
        <div style={cardStyle}>
          {productDetails.map((productData) => (
            <Card key={productData.id} {...productData} />
          ))}
        </div>
    );
}

export default  ProductList;