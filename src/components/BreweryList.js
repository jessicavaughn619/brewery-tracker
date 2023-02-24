import React from "react";
import BreweryCard from "./BreweryCard";

function BreweryList({ breweries }) {
    const breweryCards = breweries.map((brewery) => (
        <BreweryCard 
            brewery={brewery}
            key={brewery.id}
        />
    ))
    return (
        <div>
            {breweryCards}
        </div>
    )
}

export default BreweryList;