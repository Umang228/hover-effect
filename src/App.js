import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [lastHoveredIndex, setLastHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
    setLastHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const images = [
    {
      src: "/1.webp",
      title: "STRENGTH",
    },
    {
      src: "/2.webp",
      title: "MOBILITY",
    },
    {
      src: "/3.webp",
      title: "DRILLS",
    },
  ];

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex overflow-hidden rounded-3xl w-full max-w-5xl h-72">
        {images.map((image, index) => (
          <div
            key={index}
            className={`relative transition-[flex] duration-300 ease-in-out ${
              hoveredIndex === index || lastHoveredIndex === index
                ? "flex-[3]"
                : hoveredIndex === null
                ? "flex-1"
                : "flex-[1]"
            }`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={image.src}
              alt={image.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 text-white text-xl font-medium">
              {image.title}
            </div>
            {hoveredIndex === index && (
              <div className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-4 h-4 text-black"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.75 17.25L14 12l-5.25-5.25"
                  />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
