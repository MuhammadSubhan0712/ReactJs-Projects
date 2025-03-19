import React, { useEffect } from "react";
import Hero from "./Components/Hero/Hero";
import AOS from "aos";
import 'aos/dist/aos.css';
import Skills from "./Components/Skills/Skills";
import Experience from "./Components/Experience/Experience";

const App = () => {

  useEffect(()=>{
    AOS.init({
      duration: 1000,
    });
  },[]);
  return (
    <main className="bg-[#0d182e]">
      <Hero />
      <Skills/>
      <Experience/>
    </main>
  );
};

export default App;
