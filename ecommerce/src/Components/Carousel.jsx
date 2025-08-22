import React, { useState, useEffect } from "react";
import carousel1 from "/assets/carousel1.jpg";
import carousel2 from "/assets/carousel2.jpg";
import carousel3 from "/assets/carousel3.jpg";
import carousel4 from "/assets/carousel4.jpg";
import carousel5 from "/assets/carousel5.jpg";
import carousel6 from "/assets/carousel6.jpg";


const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    carousel1,
    carousel2,
    carousel3,
    carousel4,
    carousel5,
    carousel6
  ];

  // Auto-rotate slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  return (
   <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[90vh] overflow-hidden group">
      {/* Slides container */}
      <div className="relative h-full w-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <div className="relative w-full h-full">
              <img
                src={image}
                className="w-full h-full object-cover"
                alt={`Slide ${index + 1}`}
                loading={index === currentSlide ? "eager" : "lazy"}
                // Adding sizes attribute for better responsive loading
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
              />
              {/* Optional: Add overlay for better text contrast if needed */}
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Optional: Add captions if needed */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20 text-white text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold drop-shadow-md">
          Welcome to Our Store
        </h2>
        <p className="mt-2 text-sm sm:text-base md:text-lg drop-shadow-md">
          Discover amazing products and deals
        </p>
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-white w-6" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        type="button"
        onClick={goToPrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 z-30 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/30 hover:bg-white/50 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
        aria-label="Previous slide"
      >
        <svg
          className="w-4 h-4 sm:w-6 sm:h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        type="button"
        onClick={goToNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 z-30 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/30 hover:bg-white/50 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
        aria-label="Next slide"
      >
        <svg
          className="w-4 h-4 sm:w-6 sm:h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
};

export default Carousel;