import React from 'react';
import humberger from '../images/humberger-PhotoRoom.png';
function Navbar() {
return (
<nav className="bg-pink-100 text-grey-500">
<div className="container mx-auto flex justify-between items-center py-4">
<span className="logo text-xl text-red-500 font-semibold">Foodle</span>
<ul className="flex items-center space-x-6">
<div className="centered-links hidden md:flex space-x-4">
<li><a href="/">Home</a></li>
<li><a href="/offers">Offers</a></li>
<li><a href="/services">Services</a></li>
<li><a href="/menu">Menu</a></li>
<li><a href="/aboutus">About Us</a></li>
</div>
<div className="end-links flex items-center space-x-6">
<li><a className='text-red-400  rounded-md px-3 py-1' href="/login">Login</a></li>
<button className="ml-6">
<li><a className ='text-red-400 border border-red-500 rounded-md px-3 py-1'href="/signup">Sign Up</a></li>
</button>
</div>
</ul>
</div>
<div className="container mx-auto py-8 flex flex-col md:flex-row items-center justify-center md:justify-between">
<div className="content text-center md:text-left md:mr-8">
<h1 className="text-4xl font-semibold mb-4">All Fast Food is<br />Available at Foodle</h1>
<p className="text-lg mb-8">We are Just A Click Away When You<br />Crave For Delicious Fast Food</p>
<div className="buttons space-y-2 md:space-y-0 md:space-x-4">
<button className='px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-blue-600'>
<i className="bi bi-handbag-fill mr-2"></i>Buy Now
</button>
<button className='px-4 py-2 bg-gray-300 text-red-700 rounded-lg hover:bg-gray-400'>
<i className="bi bi-play-circle mr-2"></i>How To Order
</button>
</div>
</div>
<div className="image-container">
<img src={'./humberger-PhotoRoom.png'}alt='burger'/>
</div>
</div>

<div className="services">
        <div className="container bg-white mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="rounded-lg p-6 flex items-center space-x-4">
            <div className="circle-icon bg-blue-500 text-white flex items-center justify-center">
              <i className="bi bi-credit-card-2-front"></i>
            </div>
            <div>
              <h1 className="text-lg font-semibold">Fast Delivery</h1>
              <p className="text-sm">
                The Food Will Be Delivered To<br />
                Your Home Within 1-2 Hours Of<br />
                Your Ordering.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg p-6 flex items-center space-x-4">
            <div className="circle-icon bg-green-500 text-white flex items-center justify-center">
              <i className="bi bi-arrow-clockwise"></i>
            </div>
            <div>
              <h1 className="text-lg font-semibold">Absolutely Free</h1>
              <p className="text-sm">
                No Cost<br />
                Just Order And Enjoy.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg p-6 flex items-center space-x-4">
            <div className="circle-icon bg-red-500 text-white flex items-center justify-center">
              <i className="bi bi-truck"></i>
            </div>
            <div>
              <h1 className="text-lg font-semibold">Express Delivery</h1>
              <p className="text-sm">
                The Food Will Be Delivered To<br />
                Your Home Within 1-2 Hours Of<br />
                Your Ordering.
              </p>
            </div>
          </div>
        </div>
      </div>

</nav>
);
}

export default Navbar;