import React from 'react';

const Footer =() => {
return (
<div className= "bg-pink-100  text-gray-500">
<div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-4 gap-8">
<div className="food-icons">
<div className="food">
<span className="text-xl text-red-500 font-semibold">Foodish</span>
<p className="text-sm">Continue Foodish 2023 all rights reserved</p>
</div>
<div className="icons flex mt-4">
<span className="mr-2 text-red-500">Follow Us On</span>
<div className='iconz'>
<i className="bi bi-pinterest text-xl mr-2"></i>
<i className="bi bi-instagram text-xl mr-2"></i>
<i className="bi bi-twitter text-xl mr-2"></i>
<i className="bi bi-facebook text-xl"></i>
</div>
</div>
</div>

<div className="information">
<span className="text-xl text-red-500 font-semibold">Information</span>
<ul className="mt-4">
<li className="text-sm ">Menu</li>
<li className="text-sm">Quality</li>
<li className="text-sm">Make a Choice</li>
<li className="text-sm">Salad With Vegetable</li>
<li className="text-sm">Fast Delivery</li>
<li className="text-sm">Subscribe</li>
</ul>
</div>

<div className="menu">
<span className="text-xl text-red-500 font-semibold">Menu</span>
<ul className="mt-4">
<li className="text-sm">Home</li>
<li className="text-sm">Offers</li>
<li className="text-sm">Services</li>
<li className="text-sm">About Us</li>
</ul>
</div>

<div className="contact">
<span className="text-xl text-red-500 font-semibold">Contact</span>
<ul className="mt-4">
<li className="text-sm">+123 456 789</li>
<li className="text-sm">Explore</li>
<li className="text-sm">Info@Foodish.Com</li>
<li className="text-sm">1244, New York, USA</li>
</ul>
</div>
</div>
</div>
);
}

export default Footer;