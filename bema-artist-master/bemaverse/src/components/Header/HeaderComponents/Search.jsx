import React from "react";
import { BsSearch } from "react-icons/bs";

const Search = () => {
  return (
    <div className="search-bar">
      <BsSearch />
      <input type="search" placeholder="Search Artists, Songs and albums" />
    </div>
  );
};

export default Search;