import React, {useState} from "react";
import ProductList from "./ProductList";
import Navigation from "./Navigation";


function Shop({ updateCartCount }) {

    return (
        <body>
            <div>
                <Navigation />
                <ProductList updateCartCount={updateCartCount}/>
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            </div>
        </body>
    );
}

export default Shop;