// Level.js
import React from 'react';

const Level = ({ title, boxes }) => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">{title}</h1>
      <div className={`grid gap-6 w-full max-w-screen-xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center`}>
        {boxes.map((item, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 cursor-pointer ${item.bgColor}`}
            onClick={item.onClick}
          >
            <h2 className="text-2xl font-semibold mb-2">{item.name}</h2>
            {/* Elimina la línea siguiente para no mostrar el subtítulo */}
            {/* <p className="text-gray-700">Haz clic para explorar más.</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Level;
