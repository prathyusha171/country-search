
import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import '../components/SearchBar.css';
import countryData from '../assest/countries.json'; // Import JSON data

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');
  const [options, setOptions] = useState([]);

  useEffect(() => {
    // Prepare options from JSON data
    const formattedOptions = countryData.map(country => ({
      value: country.country,
      label: `${country.country} - ${country.capital}`
    }));
    setOptions(formattedOptions);
  }, []);

  const handleInputChange = (newValue) => {
    setInputValue(newValue);
  };

  const handleChange = (selectedOption) => {
    console.log('Selected country:', selectedOption);
  };

  const filteredOptions = options.filter(option =>
    option.label.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <div className="search-bar">
      <Select
        inputValue={inputValue}
        onInputChange={handleInputChange}
        onChange={handleChange}
        options={filteredOptions}
        getOptionLabel={(option) => option.label}
        getOptionValue={(option) => option.value}
        placeholder="Search for a country or capital..."
        noOptionsMessage={() => "No options"}
        isClearable
      />
    </div>
  );
};

export default SearchBar;
