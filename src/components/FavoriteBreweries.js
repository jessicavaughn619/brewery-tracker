import React from "react";
import BreweryCard from "./BreweryCard";

function FavoriteBreweries({ breweries, onRemoveBrewery }) {


    const favoriteBreweryCards = breweries.map((brewery) => (
        <BreweryCard
            key={brewery.id}
            brewery={brewery}
            onBreweryClick={onRemoveBrewery}
        />
    ))
    return (
        <div>
            <h1>Favorite Breweries</h1>
            {favoriteBreweryCards}
        </div>
    )
}

export default FavoriteBreweries;