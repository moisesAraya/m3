import React from 'react';

function Level({ levelData, onClick }) {
  return (
    <div
      className={`grid gap-6 w-full max-w-screen-xl ${
        levelData.length === 1
          ? 'grid-cols-1 place-items-center'
          : levelData.length === 2
          ? 'grid-cols-2 justify-center'
          : levelData.length === 3
          ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center'
          : levelData.length === 5
          ? 'grid-cols-2 md:grid-cols-3 justify-center'
          : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
      } justify-center animate-fade-in`}
    >
      {levelData.map((item, index) => (
        <div
          key={index}
          className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 cursor-pointer ${item.bgColor} animate-fade-in`}
          onClick={() => onClick(item)}
        >
          <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
          {item.subProcesses && item.subProcesses.length > 0 ? (
            <ul className="text-gray-700 list-disc ml-5">
              {item.subProcesses.map((subProcess, subIndex) => (
                <li key={subIndex} className="text-sm mt-1">
                  {subProcess.name}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-700">Haz clic para explorar más.</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default Level;
