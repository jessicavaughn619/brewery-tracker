import React from "react";

function BreweryCard({ brewery, onBreweryClick }) {
    const { city, state, name } = brewery;

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
        </div>
    )
}

export default BreweryCard;