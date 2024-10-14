import React, { useState } from 'react';
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
        return 'bg-red-100 text-red-800'; // Color para procesos estratégicos
      case 'operacional':
        return 'bg-blue-100 text-blue-800'; // Color para procesos operacionales
      case 'soporte':
        return 'bg-green-100 text-green-800'; // Color para procesos de soporte
      default:
        return 'bg-white text-black'; // Color por defecto
    }
  };

  return (
    <header className="bg-blue-600 text-white py-4 shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        {/* Logo - ajustable en tamaño */}
        <a href="https://serviubiobio.cl" target="_blank" rel="noopener noreferrer" className="flex items-center">
          <img src={serviuLogo} alt="SERVIU" className="h-16 md:h-20 lg:h-24 w-auto mr-4" />
        </a>

        {/* Título centrado en pantallas pequeñas y grandes */}
        <h1 className="text-white text-center text-2xl md:text-3xl font-bold mt-4 md:mt-0">
          Mapa de Procesos <br className="md:hidden" /> SERVIU Región del Biobío
        </h1>

        {/* Barra de búsqueda proporcional */}
        <div className="relative w-full md:w-1/4 ml-auto mt-4 md:mt-0">
          <input
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            className="bg-gray-200 text-gray-800 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            placeholder="Buscar procesos..."
          />
          
          {/* Lista de sugerencias */}
          {suggestions.length > 0 && (
            <ul className="absolute left-0 mt-2 w-full bg-white shadow-md rounded-md z-10 text-black max-h-60 overflow-auto">
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
