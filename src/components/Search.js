import React from "react";

function Search({ search, onSearch, filter, onFilter }) {
    return (
        <div className="search-filter-inputs">
            <input 
            type="text" 
            value={search}
            name="search"
            placeholder="Search By Name..."
            onChange={(e) => onSearch(e.target.value)}
            />
            <br />
            Sort Breweries:
            <select
            value={filter}
            name="filter"
            onChange={(e) => onFilter(e.target.value)}>
                <option>By City</option>
                <option>By State</option>
                <option>Alphabetically</option>
            </select>
        </div>
    )
}
    
    export default Search;