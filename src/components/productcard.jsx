// write product card here
import React from "react";
import ViewProduct from "./button";


function productCards(){
    const productImage = "https://welpix.b-cdn.net/wp-content/uploads/2024/06/A-guide-to-skincare-product-photography-1536x876.webp";
    const productName = "SkinCare";
    const productPrice = "$50";

    return(
        <div style={{border:"1px solid #ccc", width:"200px", textAlign:"center", borderRadius:"8px"}}>
            <img src={productImage} alt="Product" style={{width:"100%", borderRadius:"8px"}} />
            <h3>{productName}</h3>
            <p>{productPrice}</p>
            <ViewProduct/>
        </div>
    );
}

export default productCards;

