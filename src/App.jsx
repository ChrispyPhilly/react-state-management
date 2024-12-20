import React, { useState } from 'react';
import './App.css'; 

const App = () => {
  
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [totalStrength, setTotalStrength] = useState(0);
  const [totalAgility, setTotalAgility] = useState(0);
  const [zombieFighters, setZombieFighters] = useState([
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
  ])
     
  const calculateTotalStrength = (team) => {
    return team.reduce((total, fighter) => total + fighter.strength, 0);
  };

  
  const calculateTotalAgility = (team) => {
    return team.reduce((total, fighter) => total + fighter.agility, 0);
  };

  
  const handleAddFighter = (fighter) => {
    if (money >= fighter.price) {
      setMoney(money => money - fighter.price);
      const updatedTeam = [...team, fighter];
      setTeam(updatedTeam);
      setTotalStrength(calculateTotalStrength(updatedTeam));
      setTotalAgility(calculateTotalAgility(updatedTeam));
    } else {
      console.log('Not enough money');
    }
  };

  
  const handleRemoveFighter = (fighterIdx) => {
    const updatedTeam = team.filter((fighter, idx) => idx !== fighterIdx);
    const fighterToRemove = team.find((fighter, idx) => idx === fighterIdx);
    setTeam(updatedTeam);
    setMoney(money => money + (fighterToRemove ? fighterToRemove.price : 0));
    setTotalStrength(calculateTotalStrength(updatedTeam));
    setTotalAgility(calculateTotalAgility(updatedTeam));
  };

  return (
    <div>
      <h1>Zombie Fighter Game</h1>
      <div className="money-display">
        <p>Money: ${money}</p>
      </div>
      <div className="strength-display">
        <p>Total Team Strength: {totalStrength}</p>
      </div>
      <div className="agility-display">
        <p>Total Team Agility: {totalAgility}</p>
      </div>
      <h2>Your Team:</h2>
      {team.length === 0 ? (
        <p>Pick some team members!</p>
      ) : (
        <ul className="team-list">
          {team.map((fighter, idx) => (
            <li key={idx} className="fighter-item">
              <img src={fighter.img} alt={fighter.name} className="fighter-image" />
              <div className="fighter-details">
                <h3>{fighter.name}</h3>
                <p>Price: ${fighter.price}</p>
                <p>Strength: {fighter.strength}</p>
                <p>Agility: {fighter.agility}</p>
                <button onClick={() => handleRemoveFighter(idx)} className="remove-button">
                  Remove from Team
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <h2>Available Zombie Fighters:</h2>
      <ul className="fighter-list">
        {zombieFighters.map(fighter => (
          <li key={fighter.id} className="fighter-item">
            <img src={fighter.img} alt={fighter.name} className="fighter-image" />
            <div className="fighter-details">
              <h3>{fighter.name}</h3>
              <p>Price: ${fighter.price}</p>
              <p>Strength: {fighter.strength}</p>
              <p>Agility: {fighter.agility}</p>
              <button onClick={() => handleAddFighter(fighter)} className="add-button">
                Add to Team
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;