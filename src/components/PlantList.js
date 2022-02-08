import React, { useEffect, useState } from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, searchTerm, handleUpdatePrice, deletePlant }) {
	const [searchPlants, setSearchPlants] = useState([]);

	useEffect(() => {
		setSearchPlants((searchPlants) =>
			[...plants].filter((plant) =>
				plant.name.toLowerCase().includes(searchTerm.toLowerCase())
			)
		);
	}, [searchTerm]);

	const plantMap =
		searchPlants.length > 0
			? searchPlants.map((plant) => <PlantCard key={plant.id} plant={plant} handleUpdatePrice={handleUpdatePrice} deletePlant={deletePlant}/>)
			: plants.map((plant) => <PlantCard key={plant.id} plant={plant} handleUpdatePrice={handleUpdatePrice} deletePlant={deletePlant}/>);

	return <ul className="cards">{plantMap}</ul>;
}

export default PlantList;
