import React from "react";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SearchIcon from '@material-ui/icons/Search';
import "./Header.css";
import {Link} from "react-router-dom";


function Header() {
    return (
    <div className="header">
      <Link to="/" style={{textDecoration: "none"}}>
            <div className="header_logo">
               <StorefrontIcon className="header_logoImage" fontSize="large"/>
               <h2 className="header_logoTitle">eSHOP</h2>
            </div>
        </Link>
       
        

      <div className="header_search">
        <input type="text" className="header_searchInput"></input>
        <SearchIcon className="header_searchIcons"/>
      </div>

      <div className="header_nav">
        <div className="nav_item">
           <span className="nav_itemLineOne">Hello Guest</span>
           <span className="nav_itemLineTwo">Sign in</span>

        </div>
        <div className="nav_item">
            <span className="nav_itemLineOne">Your</span>
            <span className="nav_itemLineTwo">Shop</span>
        </div>

        <Link to="/checkout" style={{textDecoration: "none"}}>
             <div className="nav_itemBasket">
                  <ShoppingBasketIcon   />
                  <span className="nav_itemLineTwo nav_BasketCount">0</span>
              </div>
        </Link>
        
         
        
        
      </div>

    </div>

      
    );
  }
  
  export default Header;
  