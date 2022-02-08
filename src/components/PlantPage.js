import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({plants, onAddPlant}) {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <main>
      <NewPlantForm onAddPlant={onAddPlant}/>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <PlantList plants={plants} searchTerm={searchTerm}/>
    </main>
  );
}

export default PlantPage;
