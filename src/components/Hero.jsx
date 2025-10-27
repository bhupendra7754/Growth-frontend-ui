import React from "react";
import heroImg from "../assets/hero-bg.webp";

const Hero = () => {
  return (
    <div className="relative w-full h-[730px] md:h-[700px] sm:h-[600px]">
      {/* Background Image */}
      <img src={heroImg} alt="hero" className="w-full h-full object-cover" />

      {/*  content */}
      <div className="absolute bottom-16 sm:bottom-10 left-6 sm:left-4 md:left-10 text-white w-[92%] sm:w-[95%]">
        <h1 className="italic tracking-tighter text-[38px] sm:text-[45px] md:text-[60px] lg:text-[70px] font-extrabold drop-shadow-lg leading-tight font-[Poppins]">
          Your unfair advantage
        </h1>

        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-4 sm:mt-3 w-full sm:w-[90%] gap-4 sm:gap-0">
          <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-slate-200 font-light max-w-[700px] leading-snug font-[Inter] text-justify sm:text-left">
            Access to vetted community, tools & courses to grow in the AI world
          </p>

          <button
            className="group flex items-center justify-center sm:justify-start gap-2 px-6 sm:px-8 md:px-10 py-2 sm:py-3 
                       bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-indigo-700 hover:to-blue-600 
                       transition-all duration-300 text-white rounded-full font-semibold font-[Poppins] 
                       text-sm sm:text-base shadow-lg tracking-tight w-fit mx-auto sm:mx-0"
          >
            Become a Member
            <span className="transform group-hover:translate-x-1 transition-transform duration-300 text-lg sm:text-xl">
              →
            </span>
          </button>
        </div>

        <div className="mt-6 h-[2px] w-full bg-white/70"></div>
      </div>
    </div>
  );
};

export default Hero;
