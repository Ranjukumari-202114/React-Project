// import { SportsBaseball } from "@material-ui/icons";
import React from "react";
import "./Checkout.css";
import CheckoutProduct from  "./CheckoutProduct";
import Subtotal from "./Subtotal.js";




function Checkout() {
  
    return (
      <div className="checkout" >
          <div className="checkout_left">
            <img src="https://storage.googleapis.com/website-production/uploads/2019/06/ecommerce-promotions-online.png" alt="" className="checkout_ad"/>
           
              <div>
                  <h2 className="checkout_title">
                       Your Shopping Basket
                  </h2>
                 

                   <CheckoutProduct />
                       
              </div>
            

          </div> 
        
           <div className="checkout_right">
                 <Subtotal  />
           </div>
         
      </div>
          
  
    );
  }
  
  export default Checkout;