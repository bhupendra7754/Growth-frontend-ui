import React, { useEffect, useRef } from "react";

const members = [
  {
    name: "Amit Sharma",
    title: "Frontend Developer",
    desc: "Amit recently joined our frontend team bringing his expertise in React and Tailwind CSS to enhance user experience and interface design.",
    short: "New Hire",
    memberNum: "4423",
    date: "4/2022",
  },
  {
    name: "Priya Verma",
    title: "UI Designer",
    desc: "Priya is passionate about creating clean and engaging UI experiences that blend creativity with usability for better design outcomes.",
    short: "Creative Mind",
    memberNum: "4424",
    date: "5/2022",
  },
  {
    name: "Rohan Mehta",
    title: "Backend Engineer",
    desc: "Rohan has a strong background in Node.js and MongoDB, ensuring our systems stay secure, efficient, and scalable for every new feature.",
    short: "Code Wizard",
    memberNum: "4425",
    date: "6/2022",
  },
  {
    name: "Anjali Singh",
    title: "QA Analyst",
    desc: "Anjali ensures every product release meets quality standards, conducting rigorous testing and ensuring seamless user experiences.",
    short: "Bug Hunter",
    memberNum: "4426",
    date: "7/2022",
  },
  // duplicate to make more cards
  {
    name: "Karan Patel",
    title: "Data Analyst",
    desc: "Karan specializes in data visualization and insights, transforming raw data into meaningful and actionable decisions for business growth.",
    short: "Insight Pro",
    memberNum: "4427",
    date: "8/2022",
  },
  {
    name: "Sanya Kapoor",
    title: "Project Manager",
    desc: "Sanya manages cross-functional teams with a focus on timely delivery, effective collaboration, and maintaining product excellence.",
    short: "Leader",
    memberNum: "4428",
    date: "9/2022",
  },
];

const NewMemberSlider = () => {
  const sliderRef = useRef(null);

  // Auto scroll effect
  useEffect(() => {
    const slider = sliderRef.current;
    let scrollAmount = 0;

    const animate = () => {
      if (!slider) return;

      scrollAmount += 1; // speed
      if (scrollAmount > slider.scrollWidth / 2) {
        scrollAmount = 0; // loop
      }
      slider.scrollLeft = scrollAmount;
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <section className="w-full py-16 px-6 md:px-16 bg-[#0e0e0e] text-white font-[Poppins] overflow-hidden">
      {/* Heading */}
      <div className="mb-10">
        <h1 className="text-white text-[32px] font-bold pb-2">
          New Members
        </h1>
        <p className="text-slate-300">
          Say hello to curated folks who joined our fam
        </p>
      </div>

      {/* Slider */}
      <div
        ref={sliderRef}
        className="flex gap-6 w-full overflow-x-hidden relative"
      >
        {/* Duplicate members to make seamless loop */}
        {[...members, ...members].map((member, index) => (
          <div
            key={index}
            className="group relative flex-shrink-0 w-[250px] sm:w-[280px] md:w-[300px] lg:w-[320px] h-[300px] bg-[#1c1c1c] p-6 rounded-xl transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 flex flex-col justify-between"
          >
            {/* Top Row: Member Number & Date */}
            <div className="flex justify-between mb-2">
              <span className="text-blue-400 font-semibold text-sm sm:text-base">
                #{member.memberNum}
              </span>
              <span className="text-gray-400 text-xs sm:text-sm">
                {member.date}
              </span>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-gray-300 leading-snug mb-4 line-clamp-3">
              {member.desc}
            </p>

            {/* Footer */}
            <div>
              <p className="text-[13px] text-blue-400 font-semibold mb-1">
                {member.short}
              </p>
              <h3 className="text-[16px] sm:text-[18px] font-semibold text-white">
                {member.name}
              </h3>
            </div>

            {/* Hover glowing circle */}
            <div className="absolute -top-5 -left-5 w-10 h-10 rounded-full bg-blue-500/30 opacity-0 transition-all duration-300 pointer-events-none group-hover:opacity-100"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewMemberSlider;




