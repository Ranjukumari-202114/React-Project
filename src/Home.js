import React from 'react';
import './Home.css';
import Product from "./Product";

function Home() {
    return (
      

        <div className="home">
            <div className="home_container">
            
                <img src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/Ecommerce-website-design.jpg?auto=format&q=60&fit=max&w=930" alt="" className='home_image'/>
            



               <div className="home_row">
                    <Product 
                        id = "3456623"
                        title ="The quality of this product is too good and awesome" 
                        price={34}
                        rating={5}
                        image="https://fabculture.s3.ap-south-1.amazonaws.com/aws-files/2021/06/2361blue2-scaled.jpg"

                    />
                    <Product 
                        id = "3456634"
                        title ="The quality of this product is too good and awesome " 
                        price={42}
                        rating={3}
                        image="https://m.media-amazon.com/images/I/815ksZAhYLS._UL1500_.jpg"
                        
                    />

               </div>

               <div className='home_row'>
                    <Product 
                        id = "3456652"
                        title ="The quality of this product is too good and awesome" 
                        price={23}
                        rating={5}
                        image="https://cdn.shopify.com/s/files/1/0047/4637/9362/products/DSC_2245_600x.jpg?v=1642577487"
                    />
                    <Product 
                        id = "3487967"
                        title ="The quality of this product is too good and awesome" 
                        price={54}
                        rating={2}
                        image="https://akm-img-a-in.tosshub.com/indiatoday/styles/medium_crop_simple/public/2023-01/iphone14pro.jpg?VersionId=Up5egGFcIAfIBF.oq5upu68e0hghtIUA"
                    />
                    <Product 
                        id = "3498129"
                        title ="The quality of this product is too good and awesome" 
                        price={17}
                        rating={3}
                        image="https://m.media-amazon.com/images/I/511r69pVSHL._SX522_.jpg"
                    />

               </div>

               <div className='home_row'>
                    <Product 
                        id = "3459845"
                        title ="The quality of this product is too good and awesome" 
                        price={41}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/612LwAwHefL._SX425_.jpg"
                    />
                    <Product 
                        id = "3456608"
                        title ="The quality of this product is too good and awesome" 
                        price={44}
                        rating={4}
                        image="https://img.business.com/w/700/aHR0cHM6Ly9pbWFnZXMuYnVzaW5lc3NuZXdzZGFpbHkuY29tL2FwcC91cGxvYWRzLzIwMjIvMDQvMDQwNzQ1NTMvMTU1NDI0NDAxMC5qcGVn"
                    />
                    

               </div>
            </div>

        </div>
          
      
          
  
    );
  }
  
  export default Home;