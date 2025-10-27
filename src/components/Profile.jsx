import React from "react";
import profileimg from "../assets/shreesh-profile.webp";

const Profile = () => {
  return (
    <section className="w-full py-16 px-6 md:px-16 bg-[#0e0e0e] text-white font-[Poppins] flex flex-col md:flex-row items-center justify-between gap-10">
      
      {/* ==== LEFT CONTENT ==== */}
      <div className="md:w-1/2 w-full text-left">
        <h1 className="text-[80px] sm:text-[100px] text-indigo-400 leading-none">"</h1>

        <h2 className="tracking-tight text-neutral-200 font-sans text-[22px] sm:text-[26px] md:text-[28px] lg:text-[30px] font-semibold leading-snug">
          The real value of GrowthX is the community.
          <br />
          Every conversation sharpens my thinking.
          <br />
          It's like having 100+ leaders on speed dial.
        </h2>

        <p className="text-slate-300 font-light pt-4 text-[16px] sm:text-[18px]">
          <span className="font-medium text-white">Shreesh</span>, GTM & Strategy
        </p>
        <p className="text-slate-400 text-sm sm:text-base mb-2">Member since 2022</p>

        <a
          href="/#"
          className="text-blue-200 text-[20px] sm:text-[24px] font-semibold hover:text-indigo-300 transition-all duration-200"
        >
          sarvam.ai
        </a>
      </div>

      {/* ==== RIGHT IMAGE ==== */}
      <div className="md:w-1/2 w-full flex justify-center md:justify-end relative">
        <img
          src={profileimg}
          alt="profile"
          className="w-[75%] sm:w-[70%] md:w-[350px] lg:w-[400px] rounded-3xl object-cover 
                     opacity-90 md:translate-x-[-20px] border-none outline-none"
        />
      </div>
    </section>
  );
};

export default Profile;



