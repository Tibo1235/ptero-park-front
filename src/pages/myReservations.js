import React, { useEffect, useState } from 'react';

function MyReservations() {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    // À remplacer par l’ID de l’utilisateur connecté (ex: via auth token)
    const userId = 1;

    fetch(`http://localhost:3001/api/reservations/user/${userId}`)
      .then(res => res.json())
      .then(data => setReservations(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Mes réservations</h1>
      {reservations.length === 0 ? (
        <p>Aucune réservation pour le moment.</p>
      ) : (
        reservations.map(r => (
          <div key={r.reservation_id}>
            <p>Type billet : {r.type}</p>
            <p>Date de visite : {r.date_visite}</p>
            <p>Statut : {r.statut}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default MyReservations;
