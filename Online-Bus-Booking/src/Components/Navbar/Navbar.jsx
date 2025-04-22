import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  // State for scroll behavior
  const [isVisible, setIsVisible] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  
  // State for mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Track scroll position and navbar visibility
  useEffect(() => {
    let lastScrollPosition = 0;
    
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;
      
      // Show/hide navbar based on scroll direction
      setIsVisible(
        currentPosition < lastScrollPosition ||  // Scrolling up
        currentPosition < 10                    // At top of page
      );
      
      setScrollPosition(currentPosition);
      lastScrollPosition = currentPosition;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation links data
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Main Navigation Bar */}
      <nav
        className={`w-full h-20 fixed top-0 left-0 px-4 lg:px-24 md:px-16 sm:px-8 
        flex items-center z-50 transition-all duration-500
        ${isVisible ? 'translate-y-0' : '-translate-y-full'}
        ${scrollPosition > 50 ? 'bg-white shadow-md' : 'bg-transparent'}
        backdrop-blur-sm`}
      >
        <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo */}
          <Link 
            to="/" 
            className="text-3xl font-bold text-red-500 hover:text-red-600 transition-colors"
          >
            Bus<span className="text-black">Company</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-700 hover:text-violet-600 font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <button className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-2 rounded-full transition-colors">
              Book Ticket
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-8 space-y-2">
              <span className={`block h-0.5 bg-black transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block h-0.5 bg-black ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 bg-black transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-20 left-0 w-full bg-white shadow-lg z-40 md:hidden 
        transition-all duration-500 ease-in-out overflow-hidden
        ${isMenuOpen ? 'max-h-screen py-4 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-lg text-gray-700 hover:text-violet-600 py-2 px-4 rounded hover:bg-violet-50 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <button className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-full transition-colors w-full">
            Book Ticket
          </button>
        </div>
      </div>

      {/* Page content spacer */}
      <div className="h-20"></div>
    </>
  );
};

export default Navbar;