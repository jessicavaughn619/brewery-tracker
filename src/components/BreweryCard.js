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
                <p>{name}</p>
            </div>
            <div className="brewery-location">
                <p>Location: {city}, {state}</p>
            </div>
            <div className="brewery-type">
                <p>Brewery Type: {brewery_type}</p>
            </div>
        </div>
    )
}

export default BreweryCard;