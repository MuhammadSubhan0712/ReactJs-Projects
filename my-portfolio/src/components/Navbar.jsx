import React, { useState } from "react";
import logo from "../assets/logo.mp4";
import { Menu, X } from "lucide-react";
// import "./index.css";
const Navbar = () => {
  const [mobileMenuOpen, setmMobileMenuOpen] = useState(false);
  const [hoveredItem , setHoveredItem] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-cyan-400/20 bg-gradient-to-b from-gray-900/90 to-gray-900/50 backdrop-blur-3xl shadow-[0_0_30px_0_rgba(100,255,255,0.15)] px-4 lg:px-0">
      <div className="max-w-7xl mx-auto flex h-14 items-center">
        
      <div className="md:mr-4 justify-between w-full relative z-10">
  <a 
  href="#" 
  className="mr-6 flex items-center space-x-2 group"
  onMouseEnter={()=> setHoveredItem('logo')}
  onMouseLeave={() => setHoveredItem(null)}>
    <div className="relative">
    <video 
      autoPlay 
      loop 
      muted 
      className="w-16 h-16 transition-all duration-1000 group-hover:scale-110 group-hover:rotate-6 group-hover:drop-shadow-[0_0_30px_rgba(100,255,255,0.8)]"
    >
    <source src={logo} />
    </video>
    </div>
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 text-xl font-bold animate-gradient-x">
      YOUR_LOGO
    </span>
  </a>

  <nav className="md:flex hidden items-center space-x-6 text-lg font-medium">
    <a
      href="#about"
      className="relative px-4 py-2 transition-all duration-500 hover:duration-300 
      text-foreground/60 hover:text-foreground/90
      before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 
      before:bg-gradient-to-r before:from-cyan-400 before:to-purple-600 before:transition-all 
      before:duration-500 hover:before:w-full hover:before:left-0
      after:content-[''] after:absolute after:top-0 after:right-0 after:w-0 after:h-0.5 
      after:bg-gradient-to-r after:from-purple-600 after:to-cyan-400 after:transition-all 
      after:duration-500 hover:after:w-full hover:after:right-0
      hover:shadow-[0_5px_30px_-10px_rgba(100,255,255,0.5)]
      hover:-translate-y-1
      group"
    >
      <span className="relative z-10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-600">
        About
      </span>
    </a>

    <a
      href="#projects"
      className="relative px-4 py-2 transition-all duration-500 hover:duration-300 
      text-foreground/60 hover:text-foreground/90
      before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-0 
      before:bg-gradient-to-r before:from-cyan-400 before:to-purple-600 before:transition-all 
      before:duration-500 hover:before:h-full hover:before:opacity-10
      hover:shadow-[0_0_20px_5px_rgba(100,255,255,0.3)]
      hover:scale-105
      group"
    >
      <span className="relative z-10 group-hover:animate-pulse">
        Projects
      </span>
      <span className="absolute -bottom-1 left-1/2 w-0 h-1 bg-cyan-400 transition-all duration-300 group-hover:w-4 group-hover:-translate-x-2"></span>
      <span className="absolute -bottom-1 left-1/2 w-0 h-1 bg-purple-600 transition-all duration-300 group-hover:w-4 group-hover:translate-x-2 group-hover:delay-150"></span>
    </a>

    <a
      href="#contact"
      className="relative px-4 py-2 overflow-hidden transition-all duration-500 hover:duration-300 
      text-foreground/60 hover:text-foreground/90
      hover:shadow-[0_0_30px_-5px_rgba(100,255,255,0.7)]
      hover:rotate-1 hover:skew-y-2
      group"
    >
      <span className="relative z-10 group-hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]">
        Contact
      </span>
      <span className="absolute inset-0 -z-10 bg-[conic-gradient(from_90deg_at_50%_50%,#00ccff_0%,#cc00ff_100%)] opacity-0 transition-opacity duration-500 group-hover:opacity-10"></span>
      <span className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-400/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></span>
    </a>
  </nav>
</div>

        {/* For mobile view */}
        <button
          className="inline-flex items-center justify-center rounded-md md:hidden"
          onClick={() => setmMobileMenuOpen(!mobileMenuOpen)}>
          <span className="sr-only">Open main menu</span>
          {mobileMenuOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2 flex justify-center flex-col items-center gap-5">
            <a
              href="#about"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900">
              About
            </a>
            <a
              href="#projects"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900">
              Projects
            </a>
            <a
              href="#contact"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900">
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
