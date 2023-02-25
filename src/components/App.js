import React, { useEffect, useState } from "react";
import Header from "./Header";
import BreweryList from "./BreweryList";
import FavoriteBreweries from "./FavoriteBreweries";
import AddBreweryForm from "./AddBreweryForm";
import Search from "./Search";

function App() {
const [breweries, setBreweries] = useState([]);
const [favorites, setFavorites] = useState([]);
const [search, setSearch] = useState("");
const [filter, setFilter] = useState("");

useEffect(() => {
  fetch("https://api.openbrewerydb.org/breweries/random?size=50")
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


const sortedBreweries = [...breweries].sort((brewery1, brewery2) => {
  if (filter === "By City") {
    return brewery1.city.localeCompare(brewery2.city)
  }
})

const displayedBreweries = breweries.filter((brewery) => {
  return brewery.name.toLowerCase().includes(search.toLowerCase());
})


//   } else if (filter === "By State") {
//     return brewery1.state.localeCompare(brewery2.state)
//   } else {
//     return brewery1.name.localeCompare(brewery2.name)
//   }
// })

  return (
    <div className="App">
      <Header />
      <Search 
        search={search}
        onSearch={setSearch}
        filter={filter}
        onFilter={setFilter}
      />
      <div className="columns">
        <BreweryList 
        breweries={displayedBreweries}
        onAddBrewery={handleAddToFavorites}
        />
        <FavoriteBreweries 
        breweries={favorites}
        onRemoveBrewery={handleRemoveFromFavorites}
        />
      </div>
      <AddBreweryForm />
    </div>
  );
}

export default App;
