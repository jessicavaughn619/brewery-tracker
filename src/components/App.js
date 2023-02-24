import React, { useEffect, useState } from "react";
import Header from "./Header";
import BreweryList from "./BreweryList";
import FavoriteBreweries from "./FavoriteBreweries";

function App() {
const [breweries, setBreweries] = useState([]);

useEffect(() => {
  fetch("https://api.openbrewerydb.org/breweries")
  .then(res => res.json())
  .then(breweries => setBreweries(breweries))
}, [])

  return (
    <div className="App">
      <Header />
      <BreweryList 
      breweries={breweries}
      />
      <FavoriteBreweries />
    </div>
  );
}

export default App;
