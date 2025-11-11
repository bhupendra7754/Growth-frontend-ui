import { useState, useEffect } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Testimonial from "./components/Testimonial";
import Testimonial2 from "./components/Testimonial2";
import Corses from "./components/Corses";
import Profile from "./components/Profile";
import NewMember from "./components/NewMember";
import Speakers from "./components/Speakers";
import Program from "./components/Program";
import Profile2 from "./components/Profile2";
import Qna from "./components/Qna";
import Product from "./components/Product";
import Loader from "./components/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true); // page hidden until loader done
  const [fadeOut, setFadeOut] = useState(false);

  const handleFinish = () => {
    // Loader animation finished
    setFadeOut(true);
    setTimeout(() => setIsLoading(false), 700); // wait for fade-out animation
  };

  return (
    <div className="relative min-h-screen">
      {/* Main website - rendered from start but hidden visually */}
      <div
        className={`transition-opacity duration-700 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        <Nav />
        <Hero />
        <Testimonial />
        <Testimonial2 />
        <Corses />
        <Profile />
        <NewMember />
        <Speakers />
        <Program />
        <Product />
        <Profile2 />
        <Qna />
      </div>

      {/* Loader overlay */}
      {isLoading && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-white transition-opacity duration-700 ${
            fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <Loader onFinish={handleFinish} />
        </div>
      )}
    </div>
  );
}

export default App;



