import React from 'react';

const Box = ({ title, onClick, bgColor, subProcesses }) => {
  return (
    <div
      onClick={onClick}
      className="w-72 h-auto flex flex-col justify-center items-center text-lg font-semibold text-white rounded-lg transition-transform duration-300 ease-in-out shadow-lg cursor-pointer p-4 text-center transform hover:scale-105"
      style={{ backgroundColor: bgColor }}
    >
      <span>{title}</span>
      {/* Mostrar subprocesos si existen */}
      {subProcesses && subProcesses.length > 0 && (
        <ul className="mt-2 text-sm text-gray-200 text-left">
          {subProcesses.map((subProcess, index) => (
            <li key={index} className="mt-1">
              {subProcess.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Box;
