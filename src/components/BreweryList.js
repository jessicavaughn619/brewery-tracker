import React from "react";
import BreweryCard from "./BreweryCard";

function BreweryList({ breweries, onAddBrewery }) {
    const breweryCards = breweries.map((brewery) => (
        <BreweryCard 
            brewery={brewery}
            key={brewery.id}
            onBreweryClick={onAddBrewery}
        />
    ))
    return (
        <div>
            {breweryCards}
        </div>
    )
}

export default BreweryList;