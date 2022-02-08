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

function onDeletePlant(plant){
  fetch(`http://localhost:6001/plants/${plant.id}`, {
    method: 'DELETE'
  })
  .then(setPlants(plants => [...plants].filter(elem => elem.id !== plant.id)))
}

function updateThatPrice(plant, value){
  console.log(plant.id)
  fetch(`http://localhost:6001/plants/${plant.id}`, {
    method: "PATCH",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({...plant, price: value})
  })
  .then(res => res.json())
  .then(data => {
    setPlants((plants) => [...plants].map(elem=> elem.id === data.id ? data : elem))
  })
}
  return (
    <div className="app">
      <Header />
      <PlantPage plants={plants} onAddPlant={handleAddPlant} handleDeletePlant={onDeletePlant} handleUpdatePrice={updateThatPrice}/>
    </div>
  );
}

export default App;
