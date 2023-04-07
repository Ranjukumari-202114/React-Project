import React from 'react';
import './Subtotal.css';
import Currencyformat from 'react-currency-format';



function Subtotal() {
    return (
      <div  className='subtotal'>
          <Currencyformat
              
              renderText = {(value) => (
               <>
                  <p>
                    Subtotal (0 items): <strong>$87</strong>
                  </p>
                  <small className='subtotal_gift'>
                    <input type="checkbox" /> This order contains a gift
                    
                
                  </small>
               </>
              )}
             decimalScale={2}
             value={0}
             displayType={"text"}
             thousandSeparator={true}            
          
           />
          <button> Proceed to Checkout</button>
       
      </div>
          
  
    )
  }
  
  export default Subtotal