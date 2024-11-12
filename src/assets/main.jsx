import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


//main code for exercise then split it off?

import React, { useState } from 'react';

function App() {
  // State variable for team 
  const [team, setTeam] = useState([]);

  // State variable for money 
  const [money, setMoney] = useState(100);

  // State variable for zombieFighters 
  const [zombieFighters, setZombieFighters] = useState([
    { name: 'Fighter 1', health: 100, attack: 10 },
    { name: 'Fighter 2', health: 120, attack: 15 },
    { name: 'Fighter 3', health: 80, attack: 20 },
  ]);

  return (
    <div>
      <h1>Zombie Fighter Game</h1>
      <p>Money: ${money}</p>
      <p>Team: {team.length ? team.join(', ') : 'No members'}</p>
      <h2>Zombie Fighters:</h2>
      <ul>
        {zombieFighters.map((fighter, index) => (
          <li key={index}>
            {fighter.name} - Health: {fighter.health} - Attack: {fighter.attack}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;


[
  {
    name: 'Survivor',
    price: 12,
    strength: 6,
    agility: 4,
    img: 'https://via.placeholder.com/150/92c952',
  },
  {
    name: 'Scavenger',
    price: 10,
    strength: 5,
    agility: 5,
    img: 'https://via.placeholder.com/150/771796',
  },
  {
    name: 'Shadow',
    price: 18,
    strength: 7,
    agility: 8,
    img: 'https://via.placeholder.com/150/24f355',
  },
  {
    name: 'Tracker',
    price: 14,
    strength: 7,
    agility: 6,
    img: 'https://via.placeholder.com/150/d32776',
  },
  {
    name: 'Sharpshooter',
    price: 20,
    strength: 6,
    agility: 8,
    img: 'https://via.placeholder.com/150/1ee8a4',
  },
  {
    name: 'Medic',
    price: 15,
    strength: 5,
    agility: 7,
    img: 'https://via.placeholder.com/150/66b7d2',
  },
  {
    name: 'Engineer',
    price: 16,
    strength: 6,
    agility: 5,
    img: 'https://via.placeholder.com/150/56acb2',
  },
  {
    name: 'Brawler',
    price: 11,
    strength: 8,
    agility: 3,
    img: 'https://via.placeholder.com/150/8985dc',
  },
  {
    name: 'Infiltrator',
    price: 17,
    strength: 5,
    agility: 9,
    img: 'https://via.placeholder.com/150/392537',
  },
  {
    name: 'Leader',
    price: 22,
    strength: 7,
    agility: 6,
    img: 'https://via.placeholder.com/150/602b9e',
  },
];
