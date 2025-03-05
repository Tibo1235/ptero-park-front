import React from 'react';
import '../App.css'; // Assurez-vous d'avoir un fichier CSS pour le style
import logo from '../img/logo.png'; // Ajustez le chemin si nécessaire

function Home() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            <img src={logo} alt="Logo" className="App-logo" />
          </div>
          <div className="navbar-links">
            <a href="pages/register" className="App-link">S'inscrire</a>
            <a href="pages/login" className="App-link">Se connecter</a>
          </div>
        </div>
      </nav>
      <main className="main-content">
        <section className="welcome-section">
          <h1>Bienvenue à PteroPark</h1>
          <h2>Découvrez nos offres</h2>
          <p>Explorez nos événements et réservez vos billets dès aujourd'hui.</p>
          <button className="explore-button">Explorer les événements</button>
        </section>
      </main>
    </div>
  );
}

export default Home;
