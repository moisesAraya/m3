import React from 'react';

const Level = ({ title, boxes }) => {
  return (
    <div className="w-full max-w-screen-lg mx-auto p-4">
      {title && <h2 className="text-2xl md:text-4xl font-bold text-gray-700 mb-8">{title}</h2>}
      <div
        className={`level-container ${
          boxes.length === 1 ? 'justify-center' : 'justify-start'
        }`}
      >
        {boxes.map((box, index) => (
          <div
            key={index}
            className="level-box"
            style={{ backgroundColor: box.bgColor }}
            onClick={box.onClick}
          >
            <h3 className="text-xl font-semibold text-white">{box.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Level;
