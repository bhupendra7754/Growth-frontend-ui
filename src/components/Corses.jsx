import React from "react";
import cardimg from "../assets/card.webp";

const Corses = () => {
  const courses = [
    {
      title: "Build your AI automation from scratch",
      mentor: "Rishikesh Sharma",
      date: "Dec, 2025",
      city: "Pune",
    },
    {
      title: "Build your AI automation from scratch",
      mentor: "Rishikesh Sharma",
      date: "15, 2025",
      city: "Pune",
    },
    {
      title: "Build your AI automation from scratch",
      mentor: "Rishikesh Sharma",
      date: "15, 2025",
      city: "Pune",
    },
    {
      title: "Build your AI automation from scratch",
      mentor: "Rishikesh Sharma",
      date: "15, 2025",
      city: "Pune",
    },
  ];

  return (
    <section className="w-full py-16 px-6 md:px-16 bg-[#0e0e0e] text-white font-[Poppins]">
      {/* ==== Heading + Button ==== */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
        <div>
          <h1 className="text-[30px] sm:text-[40px] md:text-[48px] font-extrabold leading-tight">
            Stop talking. Start doing.
          </h1>
          <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-[600px] font-[Inter]">
            Learn, vibe, code & deploy AI at offline events hosted in 11 Indian
            cities every week.
          </p>
        </div>

        <button
          className="mt-2 sm:mt-0 group flex items-center justify-center sm:justify-start gap-2 px-8 py-3 
                     bg-gradient-to-r from-gray-200 to-indigo-700 hover:from-indigo-700 hover:to-blue-600 
                     transition-all duration-300 text-white rounded-full font-semibold font-[Poppins] 
                     text-sm sm:text-base shadow-lg tracking-tight"
        >
          Access all perks
          <span className="transform group-hover:translate-x-1 transition-transform duration-300 text-lg sm:text-xl">
            →
          </span>
        </button>
      </div>

      {/* ==== Full-width Cards Section ==== */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {courses.map((course, index) => (
          <div
            key={index}
            className="relative w-full h-[200px] rounded-xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform duration-300"
          >
            {/* Image with overlay */}
            <img
              src={cardimg}
              alt="course"
              className="w-full h-full object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

            {/* Left content inside image */}
            {/* Left content inside image */}
<div className="absolute bottom-4 left-4 text-left w-[80%]">
  <h2 className="text-sm sm:text-base lg:text-sm font-medium leading-snug text-white">
    {course.title}
  </h2>
  <p className="text-slate-300 text-xs mt-1">{course.mentor}</p>
</div>


            {/* Right content inside image */}
            <div className="absolute bottom-4 right-4 text-right">
              <p className="text-slate-200 text-sm">{course.date}</p>
              <p className="text-slate-400 text-xs">{course.city}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Corses;

