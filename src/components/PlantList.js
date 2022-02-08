import React, { useEffect, useState } from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, searchTerm }) {
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
			? searchPlants.map((plant) => <PlantCard key={plant.id} plant={plant} />)
			: plants.map((plant) => <PlantCard key={plant.id} plant={plant} />);

	return <ul className="cards">{plantMap}</ul>;
}

export default PlantList;
