import React from "react";

const Nav = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-[80px] px-8">
        {/* Logo */}
        <div className="text-white font-extrabold text-2xl tracking-tight font-[Poppins]">
          Growth<span className="text-blue-500">XK</span>
        </div>

        {/*===== Menu Items===== */}
        <ul className="hidden md:flex gap-10 items-center font-[Inter]">
          {["Home", "Learn", "Events", "Perks", "Contact"].map((item) => (
            <li
              key={item}
              className="text-slate-200 cursor-pointer hover:text-white transition duration-200 text-[15px] tracking-tight"
            >
              {item.toUpperCase()}
            </li>
          ))}
        </ul>

        {/* Login Button====== */}
        <button
          className="group flex items-center gap-1 bg-gradient-to-r from-blue-600 to-indigo-700 
                     hover:from-indigo-700 hover:to-blue-600 transition-all duration-300 text-white 
                     px-6 py-2 rounded-full font-semibold font-[Poppins] text-sm shadow-lg"
        >
          Login
          <span className="transform group-hover:translate-x-1 transition-transform duration-300 text-lg">
            →
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Nav;

