import React from "react";

function BreweryCard({ brewery }) {
    const { brewery_type, city, state, name } = brewery;
    return (
        <div class="brewery-card">
            <div class="brewery-name">
                {name}
            </div>
            <div class="brewery-location">
                Location: {city}, {state}
            </div>
            <div class="brewery-type">
                Brewery Type: {brewery_type}
            </div>
        </div>
    )
}

export default BreweryCard;