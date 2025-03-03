import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import footerleaf from "../../assets/leaf-1.png";

const Footer = () => {
  return (
    <div className="bg-orange-200 py-10">
      <div className="container mx-auto my-20 px-4 sm:px-6 lg:px-8">
        {/* Social Icons in One Line */}
        <div className="flex items-center justify-center space-x-4">
          <hr className="flex-1 border-gray-900" />
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-gray-700 hover:text-yellow-600 transition duration-300"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-yellow-600 transition duration-300"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-yellow-600 transition duration-300"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-yellow-600 transition duration-300"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
          <hr className="flex-1 border-gray-900" />
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {/* Logo and Leaf Image */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-3xl italic font-bold bg-gradient-to-r from-orange-700 to-pink-700 bg-clip-text text-transparent mb-4">
              IndorePlants
            </h3>
            <img src={footerleaf} alt="footerleaf" className="h-24 w-24" />
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-lg font-bold text-green-900 mb-4">Quick Link</p>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-700 hover:text-yellow-600 transition duration-300">
                  Plants
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-yellow-600 transition duration-300">
                  Flowers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-yellow-600 transition duration-300">
                  Gardening
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-yellow-600 transition duration-300">
                  Seeds
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-yellow-600 transition duration-300">
                  Shipping
                </a>
              </li>
            </ul>
          </div>

          {/* Popular Services */}
          <div>
            <p className="text-lg font-bold text-green-900 mb-4">Popular Services</p>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-700 hover:text-yellow-600 transition duration-300">
                  Tree Planning
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-yellow-600 transition duration-300">
                  Grass Cutting
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-yellow-600 transition duration-300">
                  Weeds Control
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-yellow-600 transition duration-300">
                  Project
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Me */}
          <div>
            <p className="text-lg font-bold text-green-900 mb-4">Contact Me</p>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-700 hover:text-yellow-600 transition duration-300">
                  +923473532002
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-yellow-600 transition duration-300">
                  muhammadsubhan0712@gmail.com
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-yellow-600 transition duration-300">
                  Indoreplants@gmail.com
                </a>
              </li>
            </ul>
          </div>
          <hr className="border-gray-900 md:block hidden"/>
          <hr className="border-gray-900 md:block hidden"/>
          <hr className="border-gray-900 md:block hidden"/>
          <hr className="border-gray-900 md:block hidden"/>
        </div>

        {/* Copyright Section */}
        <div className="flex justify-center mt-10 text-center ">
          <p className="text-stone-950">
            Copyright &copy; 2025 All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;