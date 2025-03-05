<<<<<<< HEAD
import React, { useState } from 'react';
import '../App.css';

function Reservation() {
  const [ticketCount, setTicketCount] = useState(1);

  const handleReservation = () => {
    // Logique pour traiter l'achat des tickets
    alert(`Vous avez acheté ${ticketCount} ticket(s) !`);
  };

  return (
    <div className="buy-tickets-container">
      <h2>Acheter des Tickets</h2>
      <div className="event-list">
        <h3>Événements disponibles</h3>
        <ul>
          <li>Événement 1 - 10€ par ticket</li>
          <li>Événement 2 - 15€ par ticket</li>
          <li>Événement 3 - 20€ par ticket</li>
        </ul>
      </div>
      <div className="ticket-form">
        <label>
          Nombre de tickets:
          <input
            type="number"
            value={ticketCount}
            onChange={(e) => setTicketCount(Number(e.target.value))}
            min="1"
          />
        </label>
        <br></br>
        <button className="buy-tickets-button" type="button" onClick={handleReservation}>
          Acheter des tickets
        </button>
      </div>
    </div>
  );
}

export default Reservation;
=======
import React, { useState } from 'react';
import '../App.css';

function Reservation() {
  const [ticketCount, setTicketCount] = useState(1);

  const handleReservation = () => {
    // Logique pour traiter l'achat des tickets
    alert(`Vous avez acheté ${ticketCount} ticket(s) !`);
  };

  return (
    <div className="buy-tickets-container">
      <h2>Acheter des Tickets</h2>
      <div className="event-list">
        <h3>Événements disponibles</h3>
        <ul>
          <li>Événement 1 - 10€ par ticket</li>
          <li>Événement 2 - 15€ par ticket</li>
          <li>Événement 3 - 20€ par ticket</li>
        </ul>
      </div>
      <div className="ticket-form">
        <label>
          Nombre de tickets:
          <input
            type="number"
            value={ticketCount}
            onChange={(e) => setTicketCount(Number(e.target.value))}
            min="1"
          />
        </label>
        <br></br>
        <button className="buy-tickets-button" type="button" onClick={handleReservation}>
          Acheter des tickets
        </button>
      </div>
    </div>
  );
}

export default Reservation;
>>>>>>> a6118cf (First commit)
