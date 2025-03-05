import React from 'react';
import '../App.css';

function Profile() {
  // Exemple de données utilisateur (à remplacer par des données réelles)
  const user = {
    username: 'JeanDupont',
    email: 'jean.dupont@example.com',
    memberSince: 'Janvier 2022',
  };

  return (
    <div className="profile-container">
      <h2>Profil Utilisateur</h2>
      <div className="profile-card">
        <h3>{user.username}</h3>
        <p>Email: {user.email}</p>
        <p>Membre depuis: {user.memberSince}</p>
        <button className="edit-profile-button">Modifier le profil</button>
      </div>
      <div className="purchase-history">
        <h3>Historique des achats</h3>
        <ul>
          <li>Événement 1 - 2 tickets achetés le 01/03/2023</li>
          <li>Événement 2 - 1 ticket acheté le 15/05/2023</li>
        </ul>
      </div>
    </div>
  );
}

export default Profile;
