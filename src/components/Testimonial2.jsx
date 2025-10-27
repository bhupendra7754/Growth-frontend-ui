import React from "react";
import testimonialLogo2 from "../assets/testi2-bg.jpg";

const companies = [
  "Google",
  "Microsoft",
  "Amazon",
  "Facebook",
  "Apple",
  "Tesla",
  "IBM",
  "Oracle",
  "SAP",
  "Intel",
  "Netflix",
  "Adobe",
  "Salesforce",
  "LinkedIn",
];

const Testimonial2 = () => {
  return (
    <section className="relative w-full">
      {/* Background Image */}
      <div className="relative w-full h-[600px] md:h-[700px] lg:h-[730px]">
        <img
          src={testimonialLogo2}
          alt="testimonial"
          className="w-full h-full object-cover object-center"
        />

        {/* Color Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
        

        {/* Heading */}
        <div className="absolute inset-x-0 top-20 md:top-28 px-6 md:px-16 max-w-2xl">
          <h3 className="text-white text-[28px] sm:text-[36px] md:text-[48px] lg:text-[60px] font-extrabold leading-tight tracking-tight font-[Poppins] drop-shadow-lg">
            Al credits & perks worth ₹4,00,000
          </h3>
          <p className="text-slate-300  font-extrabold leading-tight tracking-tight font-[Poppins] drop-shadow-lg">
            Start your Al implementation journey with perks from 
            the top Al <br />
            tools in the world. Plus, get access to curated deals from 40+ <br /> top
            SaaS & D2C brands.
          </p>
          <button
            className="  mt-5 group flex items-center justify-center sm:justify-start gap-2 px-6 sm:px-8 md:px-10 py-2 sm:py-3 
                       bg-gradient-to-r from-gray-300 to-indigo-700 hover:from-indigo-700 hover:to-blue-600 
                       transition-all duration-300 text-white rounded-full font-semibold font-[Poppins] 
                       text-sm sm:text-base shadow-lg tracking-tight w-fit mx-auto sm:mx-0"
          >
            Access all perks
            <span className="transform group-hover:translate-x-1 transition-transform duration-300 text-lg sm:text-xl">
              →
            </span>
          </button>
        </div>


        {/* Grid at bottom inside image */}
   <div className="absolute bottom-8 w-full px-4 hidden sm:flex justify-between">
  {[
    {
      heading: "Google",
      subHeading: "AI & Cloud",
      paragraph: "Innovating the future of search and AI technology."
    },
    {
      heading: "Microsoft",
      subHeading: "Software Solutions",
      paragraph: "Empowering people and organizations globally."
    },
    {
      heading: "Amazon",
      subHeading: "E-Commerce & Cloud",
      paragraph: "Delivering everything from cloud to doorstep services."
    },
    {
      heading: "Facebook",
      subHeading: "Social Media",
      paragraph: "Connecting people across the globe."
    },
    {
      heading: "Apple",
      subHeading: "Hardware & Software",
      paragraph: "Designing products that combine style with performance."
    },
    {
      heading: "Tesla",
      subHeading: "Automotive & Energy",
      paragraph: "Accelerating the world's transition to sustainable energy."
    },
    {
      heading: "IBM",
      subHeading: "Technology & Consulting",
      paragraph: "Building smarter businesses with AI and cloud solutions."
    }
  ].map((item, index) => (
    <div
      key={index}
      className={`flex-1 px-4 text-white text-left ${
        index !== 6 ? "border-r border-slate-400/50" : ""
      }`}
    >
      <h4 className="text-lg md:text-xl font-bold font-[Poppins]">{item.heading}</h4>
      <h5 className="text-sm md:text-base font-semibold text-slate-200 mt-1">{item.subHeading}</h5>
      <p className="text-xs md:text-sm text-slate-300 mt-1 leading-snug">{item.paragraph}</p>
    </div>
  ))}
</div>


      </div>
    </section>
  );
};

export default Testimonial2;
