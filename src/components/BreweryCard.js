import React from "react";

function BreweryCard({ brewery, onBreweryClick }) {
    const { brewery_type, city, state, name } = brewery;

    function handleClick() {
        onBreweryClick(brewery);
    }

    return (
        <div 
        className="brewery-card"
        onClick={handleClick}>
            <div className="brewery-name">
                {name}
            </div>
            <div className="brewery-location">
                Location: {city}, {state}
            </div>
            <div className="brewery-type">
                Brewery Type: {brewery_type}
            </div>
        </div>
    )
}

export default BreweryCard;