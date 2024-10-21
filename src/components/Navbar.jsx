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
      <div className="container mx-auto flex justify-between items-center px-4">
        <a href="https://www.serviubiobio.cl" target="_blank" rel="noopener noreferrer" className="flex items-center">
          <img src={serviuLogo} alt="SERVIU" className="h-32" />
        </a>
        
        <h1 className="text-white text-3xl font-bold ml-2">Mapa de Procesos SERVIU</h1>
        
        <div className="relative w-1/3 ml-56">
          <input
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            className="bg-gray-200 text-gray-800 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            placeholder="Buscar procesos..."
          />
          
          {suggestions.length > 0 && (
            <ul className="absolute left-0 mt-2 w-full bg-white shadow-md rounded-md z-10 text-black">
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
