import React from "react";
import BreweryCard from "./BreweryCard";
import AddBreweryForm from "./AddBreweryForm";
import { Card } from "semantic-ui-react";

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
            <Card.Group itemsPerRow={4}>{favoriteBreweryCards}
            </Card.Group>
            <AddBreweryForm />
        </div>
    )
}

export default FavoriteBreweries;