import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import serviuLogo from './assets/serviu-logo.png';

function Navbar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    if (term) {
      const results = onSearch(term);
      setSuggestions(results);
    } else {
      setSuggestions([]); // Limpiar las sugerencias si el campo de búsqueda está vacío
    }
  };

  const handleSuggestionClick = (suggestion) => {
    suggestion.onClick();
    setSearchTerm('');
    setSuggestions([]); // Limpiar las sugerencias después de la selección
  };

  const getSuggestionColor = (group) => {
    switch (group) {
      case 'estrategico':
        return 'bg-red-100 text-red-800';
      case 'operacional':
        return 'bg-blue-100 text-blue-800';
      case 'soporte':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-white text-black';
    }
  };

  return (
    <header className="bg-blue-600 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <a href="https://serviubiobio.cl" target="_blank" rel="noopener noreferrer" className="flex items-center">
          <img src={serviuLogo} alt="SERVIU" className="h-20 mr-4" />
        </a>

        {/* Título centrado */}
        <h1 className="text-white text-3xl font-bold mx-auto animate-fade-in">
          Mapa de Procesos <br /> SERVIU Región del Biobío
        </h1>

        {/* Barra de búsqueda */}
        <div className="relative w-1/4 ml-auto animate-fade-in">
          <input
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            className="bg-gray-200 text-gray-800 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            placeholder="Buscar procesos..."
          />
          <FontAwesomeIcon icon={faSearch} className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500" />

          {suggestions.length > 0 && (
            <ul className="absolute left-0 mt-2 w-full bg-white shadow-md rounded-md z-10 text-black max-h-60 overflow-auto animate-fade-in">
              {suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  className={`px-4 py-2 hover:bg-gray-200 cursor-pointer ${getSuggestionColor(suggestion.group)}`}
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
