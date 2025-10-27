import { useState } from 'react'

import './App.css'
import Nav from './components/Nav';
import Hero from './components/Hero';
import Testimonial from './components/Testimonial';
import Testimonial2 from './components/Testimonial2';
import Corses from './components/Corses';
import Profile from './components/Profile';
import NewMember from './components/NewMember';
import Speakers from './components/Speakers';
import Program from './components/Program';
import Profile2 from './components/Profile2' ;
import Qna from './components/Qna';
import Product from './components/Product';

function App() {
  return (
    <div >
      <Nav/>
      <Hero/>
      <Testimonial/>
      <Testimonial2/>
      <Corses/>
      <Profile/>
      <NewMember/>
      <Speakers/>
      <Program/>
      <Product/>
      <Profile2/>
      <Qna/>
      
    </div>
  );
}

export default App;
