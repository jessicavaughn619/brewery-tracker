import React from "react";

function Search({ search, onSearch }) {
    return (
        <div className="search-input">
            <input 
            type="text" 
            value={search}
            name="search"
            placeholder="Brewery name or city"
            onChange={(e) => onSearch(e.target.value)}
            />
        </div>
    )
}
    
    export default Search;