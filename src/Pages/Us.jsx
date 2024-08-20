import React from 'react';

import pic1 from "../assets/mobile-shopping (1).png"
import pic2 from "../assets/mobile-shopping.png"
import pic3 from "../assets/online-shopping.png"
import pic4 from "../assets/online-2900303_640.jpg"



const Us = () => {
    return (
        <div>
            <div className="about-us-container bg-gradient-to-r from-amber-50 via-rose-50 to-amber-50 min-h-screen p-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-extrabold text-red-600 text-center mb-8">About Us</h1>
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Image Section */}
          <div className="lg:w-1/2">
            <img
              src={pic4}
              alt="About Us"
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Content Section */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <p className="text-xl text-gray-700 mb-6">
              Welcome to <span className="font-bold text-red-500">Emart!</span> We are a leading e-commerce platform dedicated to bringing you a wide variety of products at the best prices.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Our mission is to provide a seamless shopping experience, offering everything from electronics and clothing to groceries and home essentials.
            </p>
            <p className="text-lg text-gray-700">
              At Emart, customer satisfaction is our top priority. Our team is committed to ensuring that your shopping experience is not only convenient but also enjoyable. Thank you for choosing Emart, where your needs come first.
            </p>
          </div>
        </div>

        {/* Decorative Icons */}
        <div className="mt-12 flex justify-center space-x-8">
          <img
            src={pic1}
            alt="Icon 1"
            className="w-16 h-16"
          />
          <img
            src={pic2}
            alt="Icon 2"
            className="w-16 h-16"
          />
          <img
            src={pic3}
            alt="Icon 3"
            className="w-16 h-16"
          />
        </div>
      </div>
    </div> 
        </div>
    );
};

export default Us;