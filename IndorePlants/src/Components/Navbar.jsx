import React, { useState } from "react";
import gif from "../assets/3rd.gif";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle Menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Scrolling section
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <div className="bg-green-950 shadow-lg sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            src={gif}
            alt="gif"
            className="w-12 h-12 mr-2 rounded-full border-2 border-yellow-400 transform transition-all duration-300 hover:rotate-12 hover:scale-110"
          />
          <h1 className="font-extralight italic font-serif text-2xl bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent">
            Indoor Plants
          </h1>
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-yellow-300 text-2xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Navigated Links */}
        <ul
          className={`md:flex space-x-6 absolute md:static top-16 left-0 w-full md:w-auto bg-green-950 md:bg-transparent md:flex-row flex-col justify-center md:items-center transition-all duration-300 ease-in-out ${
            isOpen ? "flex" : "hidden"
          }`}>
          {[
            { name: "Home", id: "home" },
            { name: "About", id: "about" },
            { name: "Popular", id: "popular" },
            { name: "Review", id: "review" },
          ].map((item) => (
            <li key={item.id} className="text-center md:text-left">
              <a
                href={`#${item.id}`}
                onClick={() => scrollToSection(item.id)}
                className="block py-2 px-4 text-yellow-300 hover:text-green-300 font-semibold text-lg transition duration-300 hover:underline hover:underline-offset-4">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
