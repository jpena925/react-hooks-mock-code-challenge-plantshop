import React, { useState } from "react";

function PlantCard({plant, handleUpdatePrice, deletePlant}) {
  const [inStock, setInStock] = useState(true)

  function handleOutOfStock(){
    setInStock((inStock) => !inStock)
  }

  function updatePrice(){
    handleUpdatePrice(plant)
  }

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {inStock ? (
        <button className="primary" onClick={handleOutOfStock}>In Stock</button>
      ) : (
        <button onClick={handleOutOfStock}>Out of Stock</button>
      )}
      <button className="primary" onClick={updatePrice}>Update Price</button>
      <button className="primary" onClick={() => deletePlant(plant)}>🗑</button>
    </li>
  );
}

export default PlantCard;
