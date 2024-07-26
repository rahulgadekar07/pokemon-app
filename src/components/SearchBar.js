import React from 'react';

const SearchBar = ({ setSearchTerm }) => {
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search Pokémon"
      onChange={handleSearch}
      className="search-bar"
    />
  );
};

export default SearchBar;
