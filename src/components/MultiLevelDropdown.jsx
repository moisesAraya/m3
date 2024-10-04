// src/components/MultiLevelDropdown.jsx

import React, { useState } from 'react';

const MultiLevelDropdown = ({ groupKey, groupData, onNavigate }) => {
  const [showFirstLevel, setShowFirstLevel] = useState(false);

  // Determinar si los submenús deben desplegarse hacia la izquierda o derecha
  const isSoporte = groupKey === 'soporte';
  const submenuDirection = isSoporte ? 'right-full' : 'left-full';

  return (
    <div
      className="relative inline-block text-left"
      onMouseEnter={() => setShowFirstLevel(true)}
      onMouseLeave={() => setShowFirstLevel(false)}
    >
      <div>
        <button className="inline-flex justify-center w-full text-sm font-medium text-white hover:text-gray-300 focus:outline-none">
          {groupData.title}
        </button>
      </div>

      {/* Menú de primer nivel */}
      {showFirstLevel && (
        <div className="absolute bg-white shadow-lg mt-2 rounded-md">
          <ul className="py-1">
            {groupData.processes.map((process) => (
              <FirstLevelItem
                key={process.id}
                process={process}
                onNavigate={onNavigate}
                submenuDirection={submenuDirection}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const FirstLevelItem = ({ process, onNavigate, submenuDirection }) => {
  const [showSecondLevel, setShowSecondLevel] = useState(false);

  return (
    <li
      className="relative"
      onMouseEnter={() => setShowSecondLevel(true)}
      onMouseLeave={() => setShowSecondLevel(false)}
    >
      <button
        className={`w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none ${
          !process.subProcesses ? 'cursor-pointer' : ''
        }`}
        onClick={() => {
          if (!process.subProcesses) {
            // Si no hay subprocesos, navegar directamente
            onNavigate(process.name);
          }
        }}
      >
        {process.name}
      </button>

      {/* Menú de segundo nivel */}
      {showSecondLevel && process.subProcesses && (
        <div
          className={`absolute top-0 ${submenuDirection} mt-0 bg-white shadow-lg rounded-md z-10`}
        >
          <ul className="py-1">
            {process.subProcesses.map((subProcess) => (
              <SecondLevelItem
                key={subProcess.id}
                process={process}
                subProcess={subProcess}
                onNavigate={onNavigate}
                submenuDirection={submenuDirection}
              />
            ))}
          </ul>
        </div>
      )}
    </li>
  );
};

const SecondLevelItem = ({ process, subProcess, onNavigate, submenuDirection }) => {
  const [showThirdLevel, setShowThirdLevel] = useState(false);

  return (
    <li
      className="relative"
      onMouseEnter={() => setShowThirdLevel(true)}
      onMouseLeave={() => setShowThirdLevel(false)}
    >
      <button
        className={`w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none ${
          !subProcess.subProcesses ? 'cursor-pointer' : ''
        }`}
        onClick={() => {
          if (!subProcess.subProcesses) {
            // Si no hay más subprocesos, navegar directamente
            onNavigate(process.name, subProcess.name);
          }
        }}
      >
        {subProcess.name}
      </button>

      {/* Menú de tercer nivel */}
      {showThirdLevel && subProcess.subProcesses && (
        <div
          className={`absolute top-0 ${submenuDirection} mt-0 bg-white shadow-lg rounded-md z-10`}
        >
          <ul className="py-1">
            {subProcess.subProcesses.map((subSubProcess) => (
              <li key={subSubProcess.id}>
                <button
                  onClick={() =>
                    onNavigate(process.name, subProcess.name, subSubProcess.name)
                  }
                  className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none cursor-pointer"
                >
                  {subSubProcess.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
};

export default MultiLevelDropdown;
