import React, { useEffect, useState } from "react";
import Header from "./Header";
import BreweryList from "./BreweryList";
import FavoriteBreweries from "./FavoriteBreweries";

function App() {
const [breweries, setBreweries] = useState([]);
const [favorites, setFavorites] = useState([]);

useEffect(() => {
  fetch("https://api.openbrewerydb.org/breweries")
  .then(res => res.json())
  .then(setBreweries)
}, [])

function handleAddToFavorites(breweryToAdd) {
  const breweryInFavorites = favorites.find(
    (brewery) => brewery.id === breweryToAdd.id
  );
    if (!breweryInFavorites) {
  setFavorites([...favorites, breweryToAdd]);
  }
}

function handleRemoveFromFavorites(breweryToRemove) {
  const updatedBreweries = favorites.filter((brewery) => brewery.id !== breweryToRemove.id)
  setFavorites(updatedBreweries);
}
 
  return (
    <div className="App">
      <Header />
      <BreweryList 
      breweries={breweries}
      onAddBrewery={handleAddToFavorites}
      />
      <FavoriteBreweries 
      breweries={favorites}
      onRemoveBrewery={handleRemoveFromFavorites}
      />
    </div>
  );
}

export default App;
