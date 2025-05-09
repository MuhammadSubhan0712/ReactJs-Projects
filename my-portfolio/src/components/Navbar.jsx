import React, { useState } from "react";
import logo from "../assets/logo.mp4";
import { Menu, X } from "lucide-react";

import "../index.css";
const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-cyan-400/20 bg-gradient-to-b from-gray-900/90 to-gray-900/50 backdrop-blur-3xl shadow-[0_0_30px_0_rgba(100,255,255,0.15)] px-4 lg:px-0">
      <div className="max-w-7xl mx-auto flex h-16 items-center">
        <div className="md:mr-4 flex justify-between w-full relative z-10">
          <a
            href="#"
            className="mr-6 flex items-center space-x-2 group"
            onMouseEnter={() => setHoveredItem("logo")}
            onMouseLeave={() => setHoveredItem(null)}>
            <div className="relative">
              <video
                autoPlay
                loop
                muted
                className="w-16 h-16 transition-all duration-1000 group-hover:scale-110 group-hover:rotate-6 group-hover:drop-shadow-[0_0_30px_rgba(100,255,255,0.8)]">
                <source src={logo} />
              </video>
              {/* For 3d effect: */}
              <div
                className={`absolute -bottom-2 left-0 right-0 h-4 bg-gradient-to-t from-blue-400/40 to-transparent 
    blur-md opacity-0 transition-opacity duration-500 ${
      hoveredItem === "logo" ? "opacity-100" : ""
    }`}></div>
            </div>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-800 to-gray-50 text-2xl font-extrabold tracking-tighter animate-gradient-x">
              MUHAMMAD SUBHAN
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="md:flex hidden items-center space-x-2 text-lg font-bold">
            {['home', 'about', 'projects', 'contact'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="relative px-5 py-3 transition-all duration-500 hover:duration-200"
                onMouseEnter={() => setHoveredItem(item)}
                onMouseLeave={() => setHoveredItem(null)}
              >
              <div className={`absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-purple-600/10 
              rounded-lg transition-all duration-500 ${hoveredItem === item ? 'opacity-100 scale-105' : 'opacity-0 scale-95'}`}></div>

             <div className={`absolute -inset-1 bg-gradient-to-r from-blue-800 to-purple-800 rounded-lg blur-md opacity-0 
              transition-opacity duration-300 ${hoveredItem === item ? 'opacity-70' : ''}`}></div>
                
                <div className="relative z-10 flex items-center">
                  <span className={`block w-2 h-2 rounded-full mr-2 transition-all duration-300 ${hoveredItem === item ? 'bg-cyan-400 shadow-[0_0_10px_2px_rgba(100,255,255,0.7)] scale-150' : 'bg-white/30'}`}></span>
                  <span className={`text-white/80 transition-all duration-300 ${hoveredItem === item ? 'text-white tracking-wider scale-105' : ''}`}>
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </span>
                </div>
          <div className={`absolute bottom-0 left-1/2 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-600 
            transition-all duration-500 ${hoveredItem === item ? 'w-4/5 -translate-x-1/2' : 'w-0'}`}></div>
          </a>
            ))}

          </nav>
        </div>

      
        {/* For mobile view */}
        <button
          className="inline-flex items-center justify-center rounded-md md:hidden p-2 group"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <div className="relative">
            {mobileMenuOpen ? (
              <X className="h-8 w-8 text-cyan-400 group-hover:text-purple-500 transition-colors duration-300" />
            ) : (
              <Menu className="h-8 w-8 text-white group-hover:text-cyan-400 transition-colors duration-300" />
            )}
            <div className="absolute inset-0 rounded-full border-2 border-cyan-400/30 opacity-0 group-hover:opacity-100 group-hover:animate-ping-slow transition-opacity duration-500"></div>
          </div>
        </button>
      </div>


      {mobileMenuOpen && (
        <div className="md:hidden bg-gradient-to-b from-gray-900 to-gray-800 border-t border-cyan-400/20 shadow-[0_20px_50px_rgba(100,255,255,0.1)]">
          <div className="space-y-1 px-4 pb-6 pt-4 flex flex-col items-center gap-3">
            {['home', 'about', 'projects', 'contact'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="w-full text-center py-4 px-6 rounded-xl bg-gray-800/80 hover:bg-gradient-to-r hover:from-cyan-400/10 hover:to-purple-600/10 border border-gray-700 hover:border-cyan-400/40 text-white hover:text-cyan-300 text-lg font-medium transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(100,255,255,0.2)]"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="flex items-center justify-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </span>
              </a>
            ))}
            
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
