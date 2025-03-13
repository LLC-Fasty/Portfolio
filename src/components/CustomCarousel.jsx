"use client";
import React, { useState } from "react";

// Carousel Item Component
const CarouselItem = ({ children }) => {
  return <div className="flex-shrink-0 w-full">{children}</div>;
};

// Custom Carousel Component
const CustomCarousel = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = React.Children.count(children);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
  };

  return (
    <div className="relative w-full max-w-[1120px] mx-auto overflow-hidden">
      {/* Carousel Items Container */}
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => (
          <CarouselItem key={index}>{child}</CarouselItem>
        ))}
      </div>

      {/* Next and Previous Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-8 top-1/2 transform -translate-y-1/2 p-2 focus:outline-none"
      >
        <svg
          width="60"
          height="54"
          viewBox="0 0 60 54"
          className="text-[#212121] dark:text-[#f5f5f5]"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M29.0237 52.2004C30.3253 50.9026 30.3253 48.7984 29.0237 47.5005L11.3807 29.9103H56.6667C58.5077 29.9103 60 28.4225 60 26.587C60 24.7515 58.5077 23.2636 56.6667 23.2636H11.3807L29.0237 5.6734C30.3253 4.37563 30.3253 2.27127 29.0237 0.973503C27.722 -0.324268 25.6113 -0.324268 24.3097 0.973503L0.9763 24.237C0.3512 24.8601 0 25.7056 0 26.587C0 27.4683 0.3512 28.3138 0.9763 28.9369L24.3097 52.2004C25.6113 53.4983 27.722 53.4983 29.0237 52.2004Z"
          />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-8 top-1/2 transform -translate-y-1/2 p-2 rounded-full focus:outline-none"
      >
        <svg
          width="60"
          height="54"
          viewBox="0 0 60 54"
          className="text-[#212121] dark:text-[#f5f5f5]"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M30.9764 0.976301C32.278 -0.325434 34.3887 -0.325434 35.6904 0.976301L59.0238 24.3097C60.3254 25.6114 60.3254 27.722 59.0238 29.0237L35.6904 52.3571C34.3887 53.6587 32.278 53.6587 30.9764 52.3571C29.6747 51.0554 29.6747 48.9447 30.9764 47.6431L48.6194 30H3.33334C1.4924 30 0 28.5077 0 26.6667C0 24.8257 1.4924 23.3334 3.33334 23.3334H48.6194L30.9764 5.69037C29.6747 4.38861 29.6747 2.27807 30.9764 0.976301Z"
          />
        </svg>
      </button>
    </div>
  );
};

export default CustomCarousel;
