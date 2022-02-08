import React from "react";

function Search({ searchTerm, setSearchTerm }) {

  function handleSearching(e){
    setSearchTerm((searchTerm) => e.target.value)
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleSearching}
        value={searchTerm}
      />
    </div>
  );
}

export default Search;
