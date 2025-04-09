import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ShoppingCart } from "lucide-react";

import logo from "/assets/ec-logo.jpg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);
  const itemsCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-base-200 border-b border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo Section */}
        <Link to="/" className="flex items-center space-x-3">
          <img src={logo} className="h-8" alt="Essentia Logo" />
          <span className="text-2xl font-semibold dark:text-white">Essentia</span>
        </Link>

        {/* Mobile Toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden inline-flex items-center p-2 text-sm rounded-lg focus:outline-none dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800"
        >
          <span className="sr-only">Toggle menu</span>
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5h14a1 1 0 010 2H3a1 1 0 110-2zm0 5h14a1 1 0 010 2H3a1 1 0 110-2zm0 5h14a1 1 0 010 2H3a1 1 0 110-2z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-gray-800 dark:text-white hover:text-blue-600 transition-colors font-medium"
            >
              {link.name}
            </Link>
          ))}

          {/* Language Selector */}
          <button className="flex items-center px-3 py-2 text-sm text-gray-900 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
            🌐 English (US)
          </button>

          {/* Cart */}
          <Link to="/cart" className="relative flex items-center text-gray-700 dark:text-white">
            <ShoppingCart size={24} />
            {itemsCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                {itemsCount}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 px-4 pb-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className="block text-gray-800 dark:text-white py-2 border-b border-gray-100 dark:border-gray-700"
            >
              {link.name}
            </Link>
          ))}

          <button className="block w-full text-left py-2 text-gray-800 dark:text-white">
            🌐 English (US)
          </button>

          <Link
            to="/cart"
            className="flex items-center text-gray-800 dark:text-white py-2"
            onClick={() => setMenuOpen(false)}
          >
            <ShoppingCart size={20} className="mr-2" />
            Cart ({itemsCount})
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
