import { FaStar, FaShoppingCart } from "react-icons/fa";
import BostonFern from "../assets/cart-1.png";
import RubberPlant from "../assets/cart-2.png";
import PeaceLily from "../assets/cart-3.png";
import DesertRose from "../assets/cart-4.png";

const Popular = () => {
  return (
    <div id="popular" className="bg-green-900 py-30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-yellow-400 mb-8 sm:mb-12">
          Your Choice Plant
        </h2>

        {/* Grid for Cards */}
        <div className="mt-44 grid grid-cols-1 gap-x-8 gap-y-36 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {/* Card 1: Boston Fern */}
          <div className="popular-card relative bg-[#031802] p-10 pt-24 text-white rounded-md shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
              <img
                src={BostonFern}
                alt="Boston Fern"
                className="w-56 absolute -top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 duration-500"
              />
            <p className="italic text-center"> Nephrolepsis exaltata </p>
              <h3 className="text-gray-100 mt-2 text-center text-xl sm:text-2xl font-bold mb-2">
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

          {/* Card 2: Rubber Plant */}
              <div className="popular-card relative bg-[#031802] p-10 pt-24 text-white rounded-md shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
              <img
                src={RubberPlant}
                alt="Boston Fern"
                className="w-56 absolute -top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 duration-500"
              />
            <p className="italic text-center"> Ficus elastica </p>
              <h3 className="text-gray-100 mt-2 text-center text-xl sm:text-2xl font-bold mb-2">
                Rubber Plant
              </h3>

              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>
              <div className="flex justify-around items-center">
                <p className="text-lg sm:text-xl font-bold">$5.5</p>
                <FaShoppingCart className="text-2xl text-yellow-400 hover:text-yellow-500 cursor-pointer" />
              </div>
          </div>

          {/* Card 3: Peace Lily */}
              <div className="popular-card relative bg-[#031802] p-10 pt-24 text-white rounded-md shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
              <img
                src={PeaceLily}
                alt="Boston Fern"
                className="w-56 absolute -top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 duration-500"
              />
            <p className="italic text-center"> Spathiphyllun wallisii </p>
              <h3 className="text-gray-100 mt-2 text-center text-xl sm:text-2xl font-bold mb-2">
               Peace Lily
              </h3>

              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>
              <div className="flex justify-around items-center">
                <p className="text-lg sm:text-xl font-bold">$6.5</p>
                <FaShoppingCart className="text-2xl text-yellow-400 hover:text-yellow-500 cursor-pointer" />
              </div>
          </div>

          {/* Card 4: Desert Rose */}
              <div className="popular-card relative bg-[#031802] p-10 pt-24 text-white rounded-md shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
              <img
                src={DesertRose}
                alt="Boston Fern"
                className="w-56 absolute -top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 duration-500"
              />
            <p className="italic text-center"> Adenium obesum </p>
              <h3 className="text-gray-100 mt-2 text-center text-xl sm:text-2xl font-bold mb-2">
                Desert Rose
              </h3>

              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>
              <div className="flex justify-around items-center">
                <p className="text-lg sm:text-xl font-bold">$8</p>
                <FaShoppingCart className="text-2xl text-yellow-400 hover:text-yellow-500 cursor-pointer" />
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
