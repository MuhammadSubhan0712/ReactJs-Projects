import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import About from './components/About';
import Projects from './components/Projects';
import Contact  from './components/Contact';

const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Projects/>
    <Contact/>
    <Footer/>
    </>
    
  )
}

export default App