import React, { useState } from 'react';

function Checkout() {
  const [type, setType] = useState('Adulte');
  const [price, setPrice] = useState(25);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      user_id: 1, // à remplacer par le vrai user ID
      type,
      prix: price,
      date_achat: new Date().toISOString()
    };

    fetch('http://localhost:3001/api/billets', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(res => alert('Billet réservé !'))
    .catch(err => console.error(err));
  };

  return (
    <div>
      <h1>Réserver un billet</h1>
      <form onSubmit={handleSubmit}>
        <label>Type de billet :</label>
        <select value={type} onChange={e => setType(e.target.value)}>
          <option value="Adulte">Adulte</option>
          <option value="Enfant">Enfant</option>
        </select>
        <br />
        <label>Prix : {price} €</label>
        <br />
        <button type="submit">Payer</button>
      </form>
    </div>
  );
}

export default Checkout;
