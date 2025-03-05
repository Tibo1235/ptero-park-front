import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import Reservation from './pages/reservation';
import Profile from './pages/profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages/login" element={<Login />} />
        <Route path="/pages/register" element={<Register />} />
        <Route path="/pages/reservation" element={<Reservation />} />
        <Route path="/pages/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
