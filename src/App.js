import React, { useState } from "react";
import Image1 from "./image1.svg";
import Image2 from "./image2.svg";

const images = [Image1, Image2];

const App = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleImageClick = (index) => {
    setCurrentImage(index);
  };

  return (
    <div className="relative overflow-hidden">
      <div
        className="absolute inset-0 flex transition-all duration-500"
        style={{ transform: `translateX(-${currentImage * 100}%)` }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={`w-full h-full absolute top-0 left-${
              index * 100
            }% transition-all duration-500`}
            style={{ transform: `translateX(${currentImage * -100}%)` }}
          >
            <img
              src={image}
              alt="carousel image"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-x-0 bottom-0 flex justify-center mb-4">
        {images.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full mx-2 ${
              index === currentImage ? "bg-white" : "bg-gray-500"
            }`}
            onClick={() => handleImageClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
