import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/toys")
    .then(r => r.json())
    .then(toyData => {
      setToys(toyData)
    })
  },[])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function updateToyContainer(newToy) {
    const updatedToyArray = [...toys, newToy]
    setToys(updatedToyArray)
  }

  function onDelete(id) {
    const updatedToyArray = toys.filter((toy) => {
      return toy.id !== id
    })
    setToys(updatedToyArray)
  }
  
  function onUpdate(updatedToyObj) {
    const updatedToyArray = toys.map((toy) => {
     return toy.id === updatedToyObj.id ? updatedToyObj : toy
    })
    setToys(updatedToyArray)
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm updateToyContainer={updateToyContainer} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} onDelete={onDelete} onUpdate={onUpdate} />
    </>
  );
}

export default App
