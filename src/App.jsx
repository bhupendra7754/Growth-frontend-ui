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




import { useState } from "react";
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
import Loader from "./components/Loader"; // 👈 import loader

function App() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  const handleFinish = () => {
    setFadeOut(true);
    setTimeout(() => setLoading(false), 400); // small fade delay
  };

  return (
    <div className="relative min-h-screen">
      {/* Show loader first */}
      {loading && (
        <div
          className={`transition-opacity duration-500 ${
            fadeOut ? "opacity-0" : "opacity-100"
          }`}
        >
          <Loader onFinish={handleFinish} />
        </div>
      )}

      {/* Landing Page Components */}
      {!loading && (
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
      )}
    </div>
  );
}

export default App;
