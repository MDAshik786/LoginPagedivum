import React from "react";
import "./SearchBar.css";


const SearchBar = ({ arrow, search, setSearch }) => {
  function setValueSearch(e) {
    setSearch(e.target.value);
  }

  return (
    <div className="main-sb">
      <div className="search-bar">
        
        <div className="input-container">
          <input
            type="text"
            className="input"
            value={search}
            onChange={setValueSearch}
            autoFocus
            placeholder="Search Here"
          />
          <div className="search-icon">
            <img
              src="/images/search-xxl.png"
              alt=""
              className="saerch-icon-img"
              height={2}
              width={2}
            />
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default SearchBar;
