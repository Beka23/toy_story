import React from "react"

function ToyCard({toy, onDelete, onUpdate}) {
  const {name, image, likes, id} = toy

  function removeToy() {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE"
    })
    onDelete(id)
  }

  function updateLikes() {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: { 
        "Content-Type" : "application/json"
      }, 
      body: JSON.stringify({ 
        likes: likes + 1
      })
    })
    .then(r => r.json())
    .then(updatedToy => {
      onUpdate(updatedToy)
    })
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={updateLikes}>Like {"<3"}</button>
      <button className="del-btn" onClick={removeToy}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard
