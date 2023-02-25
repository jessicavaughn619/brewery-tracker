import React from "react";
import BreweryCard from "./BreweryCard";
import AddBreweryForm from "./AddBreweryForm";

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
            <AddBreweryForm />
        </div>
    )
}

export default FavoriteBreweries;