import React, { useState } from 'react';
import { Camera, User, MessageSquare } from 'lucide-react';
import image from '../utils/ai-generated-8815780_1280.jpg'
const Card = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Dummy data
  const dummyData = {
    url: "https://via.placeholder.com/400",  // Dummy image URL
    prompt: "This is a sample card showing a beautiful lady with blue eyes type shi.",
    author: "John Doe",
    date: "Dec 20, 2024"
  };

  return (
    <div
      className="group relative rounded-xl overflow-hidden hover:scale-110 w-60 h-72 transform transition-all duration-300 max-w-sm mx-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image with lazy loading */}
      <div className={`absolute inset-0 transition-all duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <img
          src={image}
          alt={dummyData.prompt}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          className={`w-full h-full object-cover transition-all duration-300 ${isHovered ? 'scale-105 blur-sm brightness-75' : 'scale-100'}`}
        />
      </div>

      {/* Loading skeleton */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-800 animate-pulse flex items-center justify-center">
          <Camera className="w-8 h-8 text-gray-600" />
        </div>
      )}

      {/* Content overlay */}
      <div
        className={`absolute inset-0 bg-black/60 p-6 flex flex-col justify-between transition-all duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Prompt text */}
        <p className="text-white text-lg font-semibold leading-tight">{dummyData.prompt}</p>

        {/* Author and date */}
        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-gray-300">
            <User className="w-4 h-4" />
            <span className="text-sm">{dummyData.author}</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-300">
            <MessageSquare className="w-4 h-4" />
            <span className="text-sm">{dummyData.date}</span>
          </div>
        </div>
      </div>

      {/* Hover border effect */}
      <div
        className={`absolute inset-0 ring-2 ring-blue-500 rounded-xl transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
};

export default Card;
