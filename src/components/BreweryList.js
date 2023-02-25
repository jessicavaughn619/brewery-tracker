import React from "react";
import BreweryCard from "./BreweryCard";
import { Card } from "semantic-ui-react";

function BreweryList({ breweries, onAddBrewery }) {
    const breweryCards = breweries.map((brewery) => (
        <BreweryCard 
            brewery={brewery}
            key={brewery.id}
            onBreweryClick={onAddBrewery}
        />
    ));

    return (
        <div>
            <h1>Brewery List</h1>
            <Card.Group itemsPerRow={4}>{breweryCards}</Card.Group>;
        </div>
    )
}

export default BreweryList;