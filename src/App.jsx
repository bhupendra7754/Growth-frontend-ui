// import { useState } from 'react'

// import './App.css'
// import Nav from './components/Nav';
// import Hero from './components/Hero';
// import Testimonial from './components/Testimonial';
// import Testimonial2 from './components/Testimonial2';
// import Corses from './components/Corses';
// import Profile from './components/Profile';
// import NewMember from './components/NewMember';
// import Speakers from './components/Speakers';
// import Program from './components/Program';
// import Profile2 from './components/Profile2' ;
// import Qna from './components/Qna';
// import Product from './components/Product';

// function App() {
//   return (
//     <div >
//       <Nav/>
//       <Hero/>
//       <Testimonial/>
//       <Testimonial2/>
//       <Corses/>
//       <Profile/>
//       <NewMember/>
//       <Speakers/>
//       <Program/>
//       <Product/>
//       <Profile2/>
//       <Qna/>
      
//     </div>
//   );
// }

// export default App;




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
  const [showLoader, setShowLoader] = useState(false); // start hidden
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // loader thoda delay se dikhao (500ms)
    const delay = setTimeout(() => setShowLoader(true), 600);
    return () => clearTimeout(delay);
  }, []);

  const handleFinish = () => {
    setFadeOut(true);
    setTimeout(() => setShowLoader(false), 600);
  };

  return (
    <div className="relative min-h-screen">
      {/* Hero and all sections render immediately */}
      <div className="transition-opacity duration-500 opacity-100">
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

      {/* Loader overlay (appears after short delay) */}
      {showLoader && (
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


