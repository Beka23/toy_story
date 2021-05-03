import React, { useState } from "react";

function ToyForm({updateToyContainer}) {
  const [name, setName] = useState('')
  const [image, setImage] = useState('')

  function handleToySubmit(e) {
    e.preventDefault()

    fetch('http://localhost:3001/toys', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify({
        name: name,
        image: image,
        likes: 0
      }),
    })
    .then(r => r.json())
    .then(newToyObj => {
      updateToyContainer(newToyObj)
    })
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleToySubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          autoComplete="off"
          onChange={e => setName(e.target.value)}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          autoComplete="off"
          onChange={e => setImage(e.target.value)}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  )
}

export default ToyForm
