import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({plants, onAddPlant, handleUpdatePrice, handleDeletePlant}) {
  const [searchTerm, setSearchTerm] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    price: 0
  })


  return (
    <main>
      <NewPlantForm onAddPlant={onAddPlant} formData={formData} setFormData={setFormData}/>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <PlantList plants={plants} searchTerm={searchTerm} handleUpdatePrice={handleUpdatePrice} deletePlant={handleDeletePlant}/>
    </main>
  );
}

export default PlantPage;
