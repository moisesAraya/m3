// src/components/Navbar.jsx

import React, { useState, useEffect, useRef } from 'react';
import processData from '../data/processData';
import MultiLevelDropdown from './MultiLevelDropdown';

const Navbar = ({ onSearch, currentLevel, onNavigate }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const suggestionsRef = useRef(null);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.length > 0) {
      const allProcesses = [];

      // Recorrer todos los procesos para obtener una lista plana
      Object.keys(processData).forEach((groupKey) => {
        processData[groupKey].processes.forEach((process) => {
          allProcesses.push({
            name: process.name,
            group: groupKey,
            processId: process.id,
          });

          // También puedes incluir subprocesos si lo deseas
          process.subProcesses.forEach((subProcess) => {
            allProcesses.push({
              name: subProcess.name,
              group: groupKey,
              processId: process.id,
              subProcessId: subProcess.id,
            });

            if (subProcess.subProcesses) {
              subProcess.subProcesses.forEach((subSubProcess) => {
                allProcesses.push({
                  name: subSubProcess.name,
                  group: groupKey,
                  processId: process.id,
                  subProcessId: subProcess.id,
                  subSubProcessId: subSubProcess.id,
                });
              });
            }
          });
        });
      });

      // Filtrar las sugerencias según el término de búsqueda
      const filteredSuggestions = allProcesses.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      );

      setSuggestions(filteredSuggestions.slice(0, 5)); // Mostrar solo las primeras 5 sugerencias
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    // Navegar al proceso seleccionado
    onSearch(suggestion.name);
    setSearchTerm('');
    setSuggestions([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
    setSearchTerm('');
    setSuggestions([]);
  };

  // Cerrar las sugerencias al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target)
      ) {
        setSuggestions([]);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="w-full bg-blue-600 fixed top-0 left-0 z-50 shadow-md">
      <div className="max-w-screen-lg mx-auto flex items-center justify-between p-4">
        {/* Contenedor izquierdo: Título y Barra de búsqueda */}
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold text-white">
            Mapa de Procesos SERVIU
          </h1>

          {/* Barra de búsqueda */}
          <form
            onSubmit={handleSubmit}
            className="relative"
            ref={suggestionsRef}
          >
            <input
              type="text"
              className="rounded-full py-2 px-4"
              placeholder="Buscar proceso..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <button
              type="submit"
              className="absolute right-0 top-0 mt-2 mr-3 text-gray-600"
            >
              🔍
            </button>

            {/* Sugerencias */}
            {suggestions.length > 0 && (
              <ul className="absolute left-0 mt-2 w-full bg-white rounded-md shadow-lg overflow-hidden z-20">
                {suggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    {suggestion.name}
                  </li>
                ))}
              </ul>
            )}
          </form>
        </div>

        {/* Menús principales */}
        <div className="flex space-x-4">
          {Object.keys(processData).map((groupKey) => (
            <MultiLevelDropdown
              key={groupKey}
              groupKey={groupKey}
              groupData={processData[groupKey]}
              onNavigate={onNavigate}
            />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;