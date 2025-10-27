import React from "react";

import image from "../assets/image.avif";

const Product = () => {
  return (
    <>
      <div className="relative w-full py-16 px-4 sm:px-8 md:px-16 bg-[#0e0e0e] text-white font-[Poppins] overflow-hidden">
        
        {/* Header Section */}
        <div className="max-w-[1200px] mx-auto relative">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            {/* Left aligned heading */}
            <h1 className="text-[28px] sm:text-[40px] md:text-[48px] font-extrabold leading-tight text-left">
              Product and marketing courses
            </h1>

            {/* Button aligned right */}
            <button
              className="cursor-pointer mt-6 sm:mt-0 group flex items-center justify-center gap-2 px-6 sm:px-8 py-3 
                         bg-gradient-to-r from-gray-400 to-indigo-700 hover:from-indigo-700 hover:to-blue-600 
                         transition-all duration-300 text-white rounded-full font-semibold 
                         text-sm sm:text-base shadow-lg tracking-tight"
            >
              access all product & marketing courses
              <span className="transform group-hover:translate-x-1 transition-transform duration-300 text-lg cursor-pointer">
                →
              </span>
            </button>
          </div>
        </div>

        {/* === Responsive Grid Section === */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center cursor-pointer">
          {Array(4).fill().map((_, index) => (
            <div
              key={index}
              className="relative w-[160px] sm:w-[220px] md:w-[260px] lg:w-[280px] bg-[#1a1a1a] 
                         rounded-2xl overflow-hidden shadow-md hover:shadow-blue-500/30 
                         hover:scale-105 transition-all duration-300"
            >
              {/* Image */}
              <img
                src={image}
                alt="program"
                className="w-full h-[160px] sm:h-[200px] md:h-[240px] lg:h-[280px] object-cover"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

              {/* Text Content inside image */}
              <div className="absolute bottom-4 w-full text-center px-2">
                <h1 className="text-base sm:text-lg md:text-xl font-extrabold text-white">BRAND</h1>
                <h4 className="text-sm sm:text-base text-gray-200 font-semibold">LED GROWTH</h4>
                <p className="text-xs sm:text-sm text-gray-300 mt-1">Abhishek | Netflix</p>
              </div>
            </div>
          ))}
        </div>
      </div>

     

      
    </>
  );
};

export default Product;





