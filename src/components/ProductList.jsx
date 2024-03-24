import React from "react";
import Card from "./Card";
import productDetails from "./ProductDetails";

const cardStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '30px 0',
    padding: '0 30px',
    position: 'relative',
    top: '120px',
    left: '30px',
  };

function ProductList({ updateCartCount }) {

  const handleAddToCart = () => {
    updateCartCount((prevCount) => prevCount + 1);
  };

    return (
        <div style={cardStyle}>
          {productDetails.map((productData) => (
          <div href="productPage"><Card handleAddToCart={handleAddToCart} key={productData.id} {...productData} /></div>
          ))}
        </div>
    );
}

export default  ProductList;