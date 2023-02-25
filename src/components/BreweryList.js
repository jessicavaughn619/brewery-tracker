import React, { useState } from "react";
import BreweryCard from "./BreweryCard";
import MoreBreweries from "./MoreBreweries";

function BreweryList({ breweries, onAddBrewery }) {
    const [index, setIndex] = useState(0);

    const breweryCards = breweries
    .slice(index, index + 10)
    .map((brewery) => (
        <BreweryCard 
            brewery={brewery}
            key={brewery.id}
            onBreweryClick={onAddBrewery}
        />
    ))

    function handleClick() {
        setIndex((index) => index + 10);
    }

    return (
        <div>
            <h1>Brewery List</h1>
            {breweryCards}
            <MoreBreweries 
            onMoreClick={handleClick}
            />
        </div>
    )
}

export default BreweryList;