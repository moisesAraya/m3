import React from 'react';

const Box = ({ title, onClick, bgColor }) => {
  return (
    <div
      onClick={onClick}
      className="w-72 h-40 flex justify-center items-center text-lg font-semibold text-white rounded-lg transition-transform duration-300 ease-in-out shadow-lg cursor-pointer p-4 text-center transform hover:scale-105"
      style={{ backgroundColor: bgColor }}
    >
      <span>{title}</span>
    </div>
  );
};

export default Box;