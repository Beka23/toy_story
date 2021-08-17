import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, onDelete, onUpdate}) {
  return (
    <div id="toy-collection">
      {toys.map((toy) => {
        return <ToyCard key={toy.id} toy={toy} onDelete={onDelete} onUpdate={onUpdate} />
      })}
    </div>
  );
};

export default ToyContainer
