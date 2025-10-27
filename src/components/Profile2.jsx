import React from "react";
import fitbg from '../assets/fitbg.jpg'
import profileimg from "../assets/shreesh-profile-removebg-preview.png";

const Profile2 = () => {
  return (
    <>
      {/* ==== PROFILE SECTION ==== */}
      <section className="w-full py-16 px-6 md:px-16 bg-[#0e0e0e] text-white font-[Poppins] flex flex-col md:flex-row items-center justify-between gap-10">
        {/* ==== LEFT CONTENT ==== */}
        <div className="md:w-1/2 w-full text-left">
          <h1 className="text-[80px] sm:text-[100px] text-indigo-100 leading-none">"</h1>

          <h2 className="tracking-tight text-neutral-200 font-sans text-[22px] sm:text-[26px] md:text-[28px] lg:text-[30px] font-semibold leading-snug">
            Growth's AI stack and community tinkering with
            <br />
            AI feel like an unfair advantage for
            <br />
            everyone building in the space.
          </h2>

          <p className="text-slate-300 font-light pt-4 text-[16px] sm:text-[18px]">
            <span className="font-medium text-white">Pranav</span>, GTM & Strategy
          </p>
          <p className="text-slate-400 text-sm sm:text-base mb-2">Member since 2022</p>

          <a className="text-blue-100 text-[20px] sm:text-[24px] font-semibold transition-all duration-200">
            || ElevenLabs
          </a>
        </div>

        {/* ==== RIGHT IMAGE ==== */}
        <div className="md:w-1/2 w-full flex justify-center md:justify-end relative">
          <img
            src={profileimg}
            alt="profile"
            className="drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] w-[75%] sm:w-[70%] md:w-[350px] lg:w-[400px] rounded-3xl object-cover 
                       opacity-90 md:translate-x-[-20px] border-none outline-none bg-inherit"
          />
        </div>
      </section>

      {/* ==== MEMBERSHIP SECTION ==== */}
      <section className="w-full py-16 px-6 md:px-16 bg-[#0e0e0e] text-white font-[Poppins] flex flex-col md:flex-row items-center justify-between gap-10 border-t border-gray-700">
        {/* LEFT SIDE */}
        <div className="md:w-1/2 w-full">
          <h1 className="text-[34px] sm:text-[40px] font-semibold mb-6">
            Membership Fees & Inclusions
          </h1>
          <ul className="space-y-3 text-slate-300 text-[18px] list-disc pl-5">
            <li>Access to exclusive AI resources and projects</li>
            <li>Monthly community events & live Q&A sessions</li>
            <li>Early access to new AI tools and experiments</li>
            <li>Personal mentorship from industry experts</li>
            <li>Lifetime access to recorded sessions</li>
            <li>Community-driven discussions & feedback</li>
          </ul>
        </div>

        {/* RIGHT SIDE */}
        <div className="md:w-1/2 w-full flex flex-col items-center md:items-end justify-center md:pr-10">
          {/* Hide on small screens */}
          <div className="hidden md:block text-left md:text-right">
            <h1 className="text-[48px] sm:text-[56px] font-bold text-indigo-400 mb-2">
              ₹999<span className="text-[28px] text-gray-300">/year</span>
            </h1>
            <p className="text-slate-400 text-[18px] mb-6">including GST</p>
          </div>

          {/* Button always visible */}
          <button
            className="mt-4 group flex items-center justify-center gap-2 px-8 py-3 
                       bg-gradient-to-r from-gray-200 to-indigo-700 hover:from-indigo-700 hover:to-blue-600 
                       transition-all duration-300 text-white rounded-full font-semibold 
                       text-sm sm:text-base shadow-lg tracking-tight"
          >
            Explore all inclusions
            <span className="transform group-hover:translate-x-1 transition-transform duration-300 text-lg">
              →
            </span>
          </button>
        </div>
      </section>

   <section className="relative w-full h-[600px] md:h-[550px] sm:h-[500px] flex items-center justify-center">
  <img
    src={fitbg}
    alt=""
    className="w-full h-full object-cover brightness-[0.5]" // darken bg for better text visibility
  />

  {/* Slight Overlay */}
  <div className="absolute inset-0 bg-black/30"></div>

  {/* Centered Content */}
  <div className="absolute flex flex-col items-center justify-center text-center text-white">
    <h1 className="font-extrabold text-[55px] sm:text-[75px] md:text-[90px] leading-tight tracking-tighter drop-shadow-[0_5px_10px_rgba(0,0,0,0.9)]">
      Think you’re <br />
      <span className="text-blue-400 font-black italic drop-shadow-[0_5px_10px_rgba(0,0,0,1)]">
        a fit?
      </span>
    </h1>

    <button className="mt-10 px-10 py-3 bg-blue-600 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-blue-800 transition-all duration-300">
      Check Eligibility
    </button>
  </div>
</section>


    </>
  );
};

export default Profile2;

