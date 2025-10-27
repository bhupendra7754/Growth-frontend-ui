import React from 'react';
import teacher from '../assets/Program.webp';

const Program = () => {
  return (
    <div className="relative w-full py-16 px-6 md:px-16 bg-[#0e0e0e] text-white font-[Poppins] overflow-hidden">
      
      {/* Header Section */}
      <div className="max-w-[1200px] relative">
        <h1 className="text-[32px] sm:text-[40px] md:text-[48px] font-extrabold leading-tight">
          Learning programs
        </h1>
        <p className="tracking-tight text-slate-200 text-sm sm:text-base mt-2 max-w-[600px] font-[Inter]">
          10+ in-depth courses & 100+ masterclasses on AI, <br /> 
          product building & marketing built by top leaders
        </p>

        {/* Masterclasses title + Button side by side on desktop */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-10">
          <h2 className="text-[30px] font-semibold leading-tight">
            masterclasses
          </h2>

          {/* Button inside header aligned right */}
          <button
            className=" cursor-pointer mt-6 sm:mt-0 group flex items-center justify-center gap-2 px-8 py-3 
                       bg-gradient-to-r from-gray-200 to-indigo-700 hover:from-indigo-700 hover:to-blue-600 
                       transition-all duration-300 text-white rounded-full font-semibold 
                       text-sm sm:text-base shadow-lg tracking-tight"
          >
            Access all masterclasses
            <span className="transform group-hover:translate-x-1 transition-transform duration-300 text-lg cursor-pointer">
              →
            </span>
          </button>
        </div>
      </div>

      {/* === Grid Section === */}
      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 cursor-pointer">
        {Array(8).fill().map((_, index) => (
          <div
            key={index}
            className="bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-md hover:shadow-blue-500/30 hover:scale-105 transition-all duration-300"
          >
            <img
              src={teacher}
              alt="program"
              className="w-full h-[180px] object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-1">
                Build your own AI agent
              </h2>
              <p className="text-xs text-gray-400 mb-2">⏱ 2 hr session</p>
              <p className="text-sm text-gray-300">Coursera.ai</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Program;








