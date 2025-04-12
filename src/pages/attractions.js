import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Attractions() {
  const [attractions, setAttractions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/attractions')
      .then(res => res.json())
      .then(data => setAttractions(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Liste des attractions</h1>
      {attractions.map(attraction => (
        <div key={attraction.id}>
          <h3>{attraction.name}</h3>
          <p>{attraction.description}</p>
          <p>Prix : {attraction.price} €</p>
          <Link to={`/attractions/${attraction.id}`}>Voir les détails</Link>
        </div>
      ))}
    </div>
  );
}

export default Attractions;
