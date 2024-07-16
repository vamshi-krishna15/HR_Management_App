import React, { useState } from 'react';

const CountryDropdown = ({ countries, selectedCountry, onCountryChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (country) => {
    onCountryChange(country);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-24 rounded-md border border-gray-300 shadow-sm px-4 py-3 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedCountry.name}
          <svg className="justify- -mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M5.292 7.292a1 1 0 011.414 0L10 10.586l3.294-3.294a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-54 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {countries.map((country) => (
              <button
                key={country.code}
                className="block px-12 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                role="menuitem"
                onClick={() => handleSelect(country)}
              >
                {country.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CountryDropdown;
