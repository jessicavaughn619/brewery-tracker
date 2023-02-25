import React from "react";
import { Card } from "semantic-ui-react";

function BreweryCard({ brewery, onBreweryClick }) {
    const { city, state, name, brewery_type } = brewery;

    function handleClick() {
        onBreweryClick(brewery);
    }

    return (
        <Card>
        <div 
        className="brewery-card"
        onClick={handleClick}>
            <div className="brewery-name">
                <h4>{name}</h4>
            </div>
            <div className="brewery-location">
                <span>{city}, {state}</span>
            </div>
            <div className="brewery-type">
                <span>{brewery_type.toUpperCase()}</span>
            </div>
        </div>
        </Card>
    )
}

export default BreweryCard;