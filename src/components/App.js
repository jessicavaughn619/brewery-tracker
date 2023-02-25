import React, { useEffect, useState } from "react";
import Header from "./Header";
import BreweryList from "./BreweryList";
import FavoriteBreweries from "./FavoriteBreweries";
import Search from "./Search";

function App() {
const [breweries, setBreweries] = useState([]);
const [favorites, setFavorites] = useState([]);
const [search, setSearch] = useState("");

useEffect(() => {
  fetch("https://api.openbrewerydb.org/breweries?by_state=colorado&per_page=50")
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

const displayedBreweries = breweries.filter((brewery) => {
  return brewery.name.toLowerCase().includes(search.toLowerCase());
})

  return (
    <div className="App">
      <Header />
      <Search 
        search={search}
        onSearch={setSearch}
      />
        <BreweryList 
        breweries={displayedBreweries}
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
