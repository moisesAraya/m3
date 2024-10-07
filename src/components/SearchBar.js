import React, { useState } from 'react';

const SearchBar = ({ onSearch, suggestions }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value);
    setShowSuggestions(value.length > 0);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion.name);
    setShowSuggestions(false);
    // Aquí puedes hacer que la búsqueda navegue directamente al resultado
    onSearch(suggestion.name);
  };

  const getSuggestionColor = (group) => {
    switch (group) {
      case 'estrategico':
        return 'bg-red-100 text-red-700';
      case 'operacional':
        return 'bg-blue-100 text-blue-700';
      case 'soporte':
        return 'bg-green-100 text-green-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="relative w-full max-w-lg mx-auto">
      <input
        type="text"
        placeholder="Buscar proceso..."
        value={searchTerm}
        onChange={handleInputChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
      />
      {showSuggestions && suggestions.length > 0 && (
        <ul className="absolute left-0 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto z-10">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${getSuggestionColor(
                suggestion.group
              )}`}
            >
              {suggestion.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
