import React, { useEffect, useRef, useState } from "react";
import decoration from "../assets/leaf-4.png";
import custom1 from "../assets/review-1.jpg";
import custom2 from "../assets/review-2.jpg";
import custom3 from "../assets/review-3.jpg";
import custom4 from "../assets/review-4.jpg";
import custom5 from "../assets/review-5.jpg";
import custom6 from "../assets/review-6.jpg";
import custom7 from "../assets/review-7.jpg";

const Review = () => {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let scrollInterval;
    if (!isPaused) {
      scrollInterval = setInterval(() => {
        if (scrollRef.current) {
          scrollRef.current.scrollLeft += 1;
        }
      }, 30);
    }
    return () => clearInterval(scrollInterval);
  }, [isPaused]);

  return (
    <div id="review" className="bg-green-950 py-16 relative md:py-8">
      {/* Decoration Image */}
      <div className="absolute -top-3 left-0 hidden md:block">
        <img src={decoration} alt="decoration" className="h-64 w-64" />
      </div>

      {/* Review Container */}
      <div className="container my-15 sm:my-20 px-4 sm:px-6">
        {/* Heading */}
        <h1 className="text-2xl sm:text-4xl font-bold text-center text-yellow-400 mb-6 sm:mb-12">
          Customer Reviews
        </h1>

        {/* Review Cards */}
        <div
          className="overflow-hidden bg-gradient-to-r from-indigo-950 to-emerald-950 my-10 sm:my-40 px-4 sm:px-8 rounded-3xl relative group"
          onMouseEnter={() => setIsPaused(false)}
          onMouseLeave={() => setIsPaused(true)}>
          <div
            ref={scrollRef}
            className="flex gap-4 sm:gap-6 py-4 sm:py-5 px-4 sm:px-8 overflow-x-scroll sm:overflow-x-auto whitespace-nowrap snap-mandatory">
            {[
              custom1,
              custom2,
              custom3,
              custom4,
              custom5,
              custom6,
              custom7,
            ].map((img, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-2 w-60 sm:w-72 bg-transparent border-2 border-blue-900/40 text-white rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-3xl cursor-pointer snap-center"
                onClick={() => setIsPaused(true)}>
                <img
                  src={img}
                  alt="Customer Review"
                  className="w-20 h-20 object-cover rounded-full"
                />
                <div className="p-4 text-center">
                  <p className="text-lg sm:text-2xl font-bold mb-1 sm:mb-2">
                    Customer {index + 1}
                  </p>
                  <p className="text-sm sm:text-base text-gray-300">
                    Amazing experience with the plants!
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Subscription Container */}
      <div className="relative bottom-10 md:-bottom-30 w-full max-w-[90%] md:w-200 h-auto md:h-44 rounded-lg bg-[#51d400] mx-auto px-4">
        {/* Heading */}
        <h2 className="text-xl sm:text-3xl p-3 sm:p-5 text-center font-bold text-green-950">
          Subscribe to our newsletter
        </h2>
        <div className="container py-3 sm:py-5 flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-8">
          {/* Input Field and Button */}
          <div className="flex justify-center flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full">
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="w-full sm:w-64 md:w-96 px-3 py-2 rounded-lg bg-white text-green-900 placeholder-green-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button className="w-auto bg-yellow-400 text-green-900 px-4 py-2 rounded-lg font-bold transform transition-all duration-300 hover:scale-105 hover:bg-red-600 hover:text-white hover:cursor-pointer">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
