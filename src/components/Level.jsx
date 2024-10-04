import React from 'react';
import Box from './Box';

const Level = ({ title, boxes }) => {
  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-6 text-center">{title}</h2>
      <div className="flex justify-center flex-wrap gap-10">
        {boxes.map((box, index) => (
          <Box
            key={index}
            title={box.name}
            onClick={box.onClick}
            bgColor={box.bgColor}
          />
        ))}
      </div>
    </div>
  );
};

export default Level;