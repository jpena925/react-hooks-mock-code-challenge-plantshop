import React, { useState, useEffect } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

const URL = 'http://localhost:6001/plants'

function App() {
  const [plants, setPlants] = useState([])

  useEffect(() => {
    fetch(URL)
    .then(res => res.json())
    .then(data => setPlants((plants) => data))
  }, [])

function handleAddPlant(newPlant){
  fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newPlant)
  })
  .then(res => res.json())
  .then(data => {
    setPlants((plants) => ([...plants, data]))
  })
}

  return (
    <div className="app">
      <Header />
      <PlantPage plants={plants} onAddPlant={handleAddPlant}/>
    </div>
  );
}

export default App;
