import React from "react";

function Search({ search, onSearch }) {
    return (
        <div className="search-input">
            <input 
            type="text" 
            value={search}
            name="search"
            placeholder="Search By Name..."
            onChange={(e) => onSearch(e.target.value)}
            />
        </div>
    )
}
    
    export default Search;