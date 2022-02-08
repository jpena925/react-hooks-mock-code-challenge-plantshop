import React, {useState} from "react";

function NewPlantForm({onAddPlant}) {
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    price: 0
  })

  function handleFormChange(e){
    let changeType = e.target.name
    let changeValue = e.target.value

    setFormData((formData) => ({...formData, [changeType]: changeValue}))
  }

  function submitAddPlant(e){
    e.preventDefault()
    onAddPlant(formData)
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={submitAddPlant}>
        <input type="text" name="name" placeholder="Plant name" onChange={handleFormChange} value={formData.name}/>
        <input type="text" name="image" placeholder="Image URL" onChange={handleFormChange} value={formData.image}/>
        <input type="number" name="price" step="0.01" placeholder="Price" onChange={handleFormChange} value={formData.price}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
