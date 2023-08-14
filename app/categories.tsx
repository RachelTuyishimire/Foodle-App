import React from "react";



const Categories = () =>{
    return(
        <div>
            <div className="categories">
                <h1>Best<strong className="del"> Delivered</strong><br/>Categories</h1>
                <p>Here Are Some Of Our Best Distributed<br/>Categories. If You Want You Can Order<br/>From Here</p>
            </div>
            <div className="container">
             <div className="humb"><img src='{humberger}' alt=""/>
                <h2>Chicken Burger</h2>
                <h3>Order Now</h3>
                </div>
                <div><img src='{pizza}' alt=""/>
                <h2>Chicken Pizza</h2>
                <h3>Order Now</h3>
                </div>
              <div><img src='{slice}' alt=""/>
                <h2>French Fries</h2>
                <h3>Order Now</h3>
                </div> 
            </div>
        </div>
    )
};

export default Categories