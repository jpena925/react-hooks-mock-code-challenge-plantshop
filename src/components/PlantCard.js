import React, { useState } from "react";

function PlantCard({plant, handleUpdatePrice, deletePlant}) {
  const [inStock, setInStock] = useState(true)
  const [newPrice, setNewPrice] = useState(0)

  function handleOutOfStock(){
    setInStock((inStock) => !inStock)
  }

  function editPrice(e){
    setNewPrice((newPrice) => e.target.value)
  }


  function handleNewPriceChange(e){
    e.preventDefault()
    handleUpdatePrice(plant, newPrice)
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
      <button className="primary" onClick={() => deletePlant(plant)}>🗑</button>
      <form onSubmit={handleNewPriceChange}>
        <input type="number" name="price" step="0.01" placeholder="New Price" onChange={editPrice} value={newPrice}/>
        <button type="submit">Edit Price</button>
      </form>
      
    </li>
  );
}

export default PlantCard;
