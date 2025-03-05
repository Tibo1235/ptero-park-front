import React from 'react';
import '../App.css';

function Register() {
  return (
    <div className="register-container">
      <h2>Inscription</h2>
      <form className="register-form">
        <label>
          Nom d'utilisateur:
          <input type="text" name="username" required />
        </label>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <label>
          Mot de passe:
          <input type="password" name="password" required />
        </label>
        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
}

export default Register;
