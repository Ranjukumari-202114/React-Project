import React from "react";
import "./CheckoutProduct.css";


function CheckoutProduct() {
    return (
        <div className="checkoutProduct">
            <img src="https://thumbs.dreamstime.com/b/aster-flowers-art-design-26968847.jpg"  alt="" className="checkoutProduct__image"/>

            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title">
                   The product are very  good and awesome.
                </p>
                <p className="checkoutProduct_price"> 
                   <small>$</small>
                   <strong>45</strong>
                </p>
                <div className="checkoutProduct_rating">**

                </div>
                <button> Remove from Basket</button>
            </div>

        </div>

          
  
    );
  }
  
  export default CheckoutProduct;