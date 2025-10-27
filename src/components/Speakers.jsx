import React, { useEffect, useRef } from "react";
import speakerImg from "../assets/speaek.jpg";

const speakers = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  title: "Building your first AI agent",
  role: "Head of Product",
  company: "Lovable",
  img: speakerImg,
}));

const Speakers = () => {
  const sliderRef1 = useRef(null);
  const sliderRef2 = useRef(null);

  // Auto scroll for row 1
  useEffect(() => {
    const slider = sliderRef1.current;
    let scrollAmount = 0;

    const animate = () => {
      if (!slider) return;
      scrollAmount += 1; // speed for row 1
      if (scrollAmount > slider.scrollWidth / 2) scrollAmount = 0;
      slider.scrollLeft = scrollAmount;
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  // Auto scroll for row 2 (slower)
  useEffect(() => {
    const slider = sliderRef2.current;
    let scrollAmount = 0;

    const animate = () => {
      if (!slider) return;
      scrollAmount += 0.6; // slower speed
      if (scrollAmount > slider.scrollWidth / 2) scrollAmount = 0;
      slider.scrollLeft = scrollAmount;
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return (
    <section className="w-full py-16 px-6 md:px-16 bg-[#0e0e0e] text-white font-[Poppins] overflow-hidden">
      {/* ---- Header ---- */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
        <div>
          <h1 className="text-[32px] sm:text-[40px] md:text-[48px] font-extrabold leading-tight">
            Learn weekly from <br /> marquee leaders
          </h1>
          <p className="tracking-tight text-slate-400 text-sm sm:text-base mt-2 max-w-[600px] font-[Inter]">
            Members get access to live 90-min online sessions hosted with top
            experts in the world. Take notes, ask questions, and learn what
            matters.
          </p>
        </div>

        <button
          className="mt-4 sm:mt-0 group flex items-center gap-2 px-8 py-3 
                     bg-gradient-to-r from-gray-200 to-indigo-700 hover:from-indigo-700 hover:to-blue-600 
                     transition-all duration-300 text-white rounded-full font-semibold 
                     text-sm sm:text-base shadow-lg tracking-tight"
        >
          View all speakers
          <span className="transform group-hover:translate-x-1 transition-transform duration-300 text-lg">
            →
          </span>
        </button>
      </div>

      {/* ---- Auto sliding grid ---- */}
      <div className="flex flex-col gap-6 overflow-x-hidden">
        {/* Row 1 */}
        <div ref={sliderRef1} className="flex gap-6 min-w-full overflow-hidden">
          {[...speakers, ...speakers].slice(0, 10).map((sp, i) => (
            <div
              key={i}
              className="relative flex-shrink-0 w-[230px] sm:w-[260px] md:w-[280px] h-[280px] 
                         bg-[#1c1c1c] rounded-xl overflow-hidden shadow-md"
            >
              <img
                src={sp.img}
                alt={sp.name}
                className="w-full h-full object-cover opacity-80"
              />

              <div className="absolute bottom-4 left-4 right-4 ">
                <p className="text-[13px] text-slate-300 font-light">
                  {sp.role}
                </p>
                <h2 className="text-[18px] font-semibold">{sp.company}</h2>
                <div className="w-10 h-[2px] bg-white my-2"></div>
                <p className="text-[14px] sm:text-[15px] text-gray-300 font-semibold">
                  {sp.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2 (slower) */}
        <div ref={sliderRef2} className="flex gap-6 min-w-full overflow-hidden">
          {[...speakers, ...speakers].slice(5, 15).map((sp, i) => (
            <div
              key={i}
              className="relative flex-shrink-0 w-[230px] sm:w-[260px] md:w-[280px] h-[280px] 
                         bg-[#1c1c1c] rounded-xl overflow-hidden shadow-md"
            >
              <img
                src={sp.img}
                alt={sp.name}
                className="w-full h-full object-cover opacity-80"
              />

              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-[13px] text-slate-300 font-light">
                  {sp.role}
                </p>
                <h2 className="text-[18px] font-semibold">{sp.company}</h2>
                <div className="w-10 h-[2px] bg-white my-2"></div>
                <p className="text-[14px] sm:text-[15px] text-gray-300 font-semibold">
                  {sp.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;


