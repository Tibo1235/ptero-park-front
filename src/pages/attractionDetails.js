import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function AttractionDetails() {
  const { id } = useParams();
  const [attraction, setAttraction] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/api/attractions/${id}`)
      .then(res => res.json())
      .then(data => setAttraction(data))
      .catch(err => console.error(err));
  }, [id]);

  if (!attraction) return <p>Chargement...</p>;

  return (
    <div>
      <h1>{attraction.name}</h1>
      <p>{attraction.description}</p>
      <p>Prix : {attraction.price} €</p>
      {/* Tu peux ajouter ici un bouton "Réserver" */}
    </div>
  );
}

export default AttractionDetails;
