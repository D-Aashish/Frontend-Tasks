// FeaturesCard.js
import React from 'react';

export default function FeaturesCard({ image, header, sub, text }) {
  return (
    <div className="flex items-center bg-red-100 p-6 rounded-lg shadow-lg">
      {/* Image Section */}
      <div className="w-1/3 mr-6">
        <img src={image} alt="Feature Image" className="w-full h-auto rounded-lg" />
      </div>

      {/* Text Section */}
      <div className="w-2/3">
        <h2 className="text-3xl font-bold text-gray-800">{header}</h2>
        <h3 className="text-xl text-gray-600 mt-2">{sub}</h3>
        <p className="text-gray-700 mt-4">{text}</p>
      </div>
    </div>
  );
}
