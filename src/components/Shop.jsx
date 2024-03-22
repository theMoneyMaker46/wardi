import React, {useState} from "react";
import ProductList from "./ProductList";


function Shop({ updateCartCount }) {

    return (
        <body>
            <div>
                <ProductList updateCartCount={updateCartCount}/>
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            </div>
        </body>
    );
}

export default Shop;