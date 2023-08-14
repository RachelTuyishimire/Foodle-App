import React from "react";
import { images } from "./menu/json";



const Menu = () =>{
    return(
        <div className="product-container">
        <div  className='buy'>
         <h1>Our <span>Regular</span> Menu</h1>
    <p>These Are Our Regular Menus .You Can <br/> Order Anything You Like</p>
    <button  className='see'>See All</button>
    
    </div>
        {images.map((image, index) => (
          <div className="container" key={index}>
            <img src="/{image.img}"alt="Product"/>
            <div>
            <h1>{image.title}</h1>
              <div>{image.stars}  {image.tag}</div>
              
              <div>{image.price} <button>{image.button}</button> </div>
             
            </div>
          </div>
        ))}
             
        </div>
    );
}

export default Menu;