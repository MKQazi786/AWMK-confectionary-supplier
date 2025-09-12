import React from "react";
import SP from "../photos/saleItem.jpg";

function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12" >
        <div className="space-y-6 md:space-y-0 md:flex md:gap-5 lg:items-center lg:gap-15" >
          <div className="md:w-9/5 lg:w-8/8">
            <img src={SP} alt="image" className='sm:w-50 w-48 justify-self-center' />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl" >AW&MK Confectionary Suppliers  </h2>
            <p className="mt-6 text-gray-600 font-bold text-2xl" >"The ultimate shopping solution"</p>
          </div>
          <p className="sm:mt-0  mt-6 text-gray-600 text-2xl text-justify" >
             Assalam u alaikum. <br /> 
             My name is Muhammad Khubaib and i am a website
            developer and also a Businessman and this is for my Confectionary
            item website.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
