import React, { useState, useEffect } from "react";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    "/assets/carousel1.jpg",
    "/assets/carousel2.jpg",
    "/assets/carousel3.jpg",
    "/assets/carousel4.jpg",
    "/assets/carousel5.jpg",
    "/assets/carousel6.jpg",
    "/assets/carousel7.jpg",
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
    <div className="relative w-full h-[70vh] overflow-hidden group">
      {/* Slides container */}
      <div className="relative h-full w-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image}
              className="w-full h-full"
              alt={`Slide ${index + 1}`}
              loading={index === currentSlide ? "eager" : "lazy"}
            />
          </div>
        ))}
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
        className="absolute top-1/2 left-4 transform -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white/30 hover:bg-white/50 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
        aria-label="Previous slide"
      >
        <svg
          className="w-6 h-6 text-white"
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
        className="absolute top-1/2 right-4 transform -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white/30 hover:bg-white/50 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
        aria-label="Next slide"
      >
        <svg
          className="w-6 h-6 text-white"
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