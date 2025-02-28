import React from "react";
import { FaStar, FaShoppingCart } from "react-icons/fa";
import BostonFern from "../../assets/cart-1.png";
import RubberPlant from "../../assets/cart-2.png";
import PeaceLily from "../../assets/cart-3.png";
import DesertRose from "../../assets/cart-4.png";

const Popular = () => {
  return (
    <div id="popular" className="bg-green-900 py-30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-yellow-400 mb-8 sm:mb-12">
          Your Choice Plant
        </h2>

        {/* Grid for Cards */}
        <div className="grid grid-cols-1 mt-55 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Boston Fern */}
          <div className="bg-[#031802] text-white rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">

            <div className="relative flex justify-center items-center -mt-16 mx-5">
              <img
                src={BostonFern}
                alt="Boston Fern"
                className="w-full h-48 -mt-15 object-cover rounded-lg transform transition-all duration-300 hover:-translate-y-4"
              />
            </div>
            <div className="p-6 text-center mt-5">
              <h3 className="text-xl sm:text-2xl font-bold mb-2">
                Boston Fern
              </h3>
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>
              <div className="flex justify-around items-center">
                <p className="text-lg sm:text-xl font-bold">$5</p>
                <FaShoppingCart className="text-2xl text-yellow-400 hover:text-yellow-500 cursor-pointer" />
              </div>
            </div>
          </div>

          {/* Card 2: Rubber Plant */}
          <div className="bg-[#031802] text-white rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
            <div className="relative flex justify-center items-center -mt-16 mx-5">
              <img
                src={RubberPlant}
                alt="Rubber Plant"
                className="w-full h-48 -mt-15 object-cover rounded-lg transform transition-all duration-300 hover:-translate-y-4"
              />
            </div>
            <div className="p-6 text-center mt-5">
              <h3 className="text-xl sm:text-2xl font-bold mb-2">
                Rubber Plant
              </h3>
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>
              <div className="flex justify-around items-center">
                <p className="text-lg sm:text-xl font-bold">$5</p>
                <FaShoppingCart className="text-2xl text-yellow-400 hover:text-yellow-500 cursor-pointer" />
              </div>
            </div>
          </div>

          {/* Card 3: Peace Lily */}
          <div className="bg-[#031802] text-white rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
            <div className="relative flex justify-center items-center -mt-16 mx-5">
              <img
                src={PeaceLily}
                alt="Peace Lily"
                className="w-full h-48 -mt-15 object-cover rounded-lg transform transition-all duration-300 hover:-translate-y-4"
              />
            </div>
            <div className="p-6 text-center mt-5">
              <h3 className="text-xl sm:text-2xl font-bold mb-2">Peace Lily</h3>
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>
              <div className="flex justify-around items-center">
                <p className="text-lg sm:text-xl font-bold">$5</p>
                <FaShoppingCart className="text-2xl text-yellow-400 hover:text-yellow-500 cursor-pointer" />
              </div>
            </div>
          </div>

          {/* Card 4: Desert Rose */}
          <div className="bg-[#031802] text-white rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
            <div className="relative flex justify-center items-center -mt-16 mx-5">
              <img
                src={DesertRose}
                alt="Desert Rose"
                className="w-full h-48 -mt-15 object-cover rounded-lg transform transition-all duration-300 hover:-translate-y-4"
              />
            </div>
            <div className="p-6 text-center mt-5">
              <h3 className="text-xl sm:text-2xl font-bold mb-2">
                Desert Rose
              </h3>
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>
              <div className="flex justify-around items-center">
                <p className="text-lg sm:text-xl font-bold">$5</p>
                <FaShoppingCart className="text-2xl text-yellow-400 hover:text-yellow-500 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
