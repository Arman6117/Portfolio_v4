'use client'
import React, { useEffect, useState } from 'react';

const Carousel = () => {
  const items = [
    { text: "Item 1", bgColor: "#FF6B6B" },
    { text: "Item 2", bgColor: "#6BCB77" },
    { text: "Item 3", bgColor: "#4D96FF" },
    { text: "Item 4", bgColor: "#FFD93D" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextItem = () => {
    if (isAnimating) return; // Prevent action if already animating
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
      setIsAnimating(false);
    }, 600); // Match the animation duration
  };

  useEffect(() => {
    const interval = setInterval(nextItem, 3000);
    return () => clearInterval(interval);
  }, [isAnimating]);

  return (
    <div
      className={`relative h-screen w-screen overflow-hidden flex justify-center items-center transition-all duration-600 ${
        isAnimating ? "animate-showContent" : ""
      }`}
      style={{
        backgroundColor: items[currentIndex].bgColor,
      }}
    >
      <div
        className={`relative z-10 text-white text-4xl font-bold transition-opacity duration-500 ${
          isAnimating ? "opacity-0" : "opacity-100"
        }`}
      >
        {items[currentIndex].text}
      </div>

      <button
        className="absolute bottom-10 left-10 text-white bg-black px-4 py-2 rounded-full"
        onClick={() => {
          if (isAnimating) return; // Prevent action if already animating
          setIsAnimating(true);
          setTimeout(() => {
            setCurrentIndex((prevIndex) =>
              prevIndex === 0 ? items.length - 1 : prevIndex - 1
            );
            setIsAnimating(false);
          }, 600);
        }}
      >
        Prev
      </button>
      <button
        className="absolute bottom-10 right-10 text-white bg-black px-4 py-2 rounded-full"
        onClick={nextItem}
      >
        Next
      </button>
    </div>
  );
};

export default Carousel;