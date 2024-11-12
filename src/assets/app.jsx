const App = () => {

    return (
      <h1>Hello world!</h1>
    );
  }
  
  import React, { useState } from 'react';
  import './App.css'; 
  
  function App() {
    // State variable for team 
    const [team, setTeam] = useState([]);
  
    // State variable for money 
    const [money, setMoney] = useState(100);
  
    // State variable for total team strength 
    const [totalStrength, setTotalStrength] = useState(0);
  
    // State variable for total team agility 
    const [totalAgility, setTotalAgility] = useState(0);
  
    // State variable for zombieFighters
    const [zombieFighters, setZombieFighters] = useState([
      { 
        id: 1, 
        name: 'Fighter 1', 
        price: 30, 
        strength: 10, 
        agility: 5, 
        image: 'https://via.placeholder.com/100x100.png?text=Fighter1' 
      },
      { 
        id: 2, 
        name: 'Fighter 2', 
        price: 40, 
        strength: 12, 
        agility: 7, 
        image: 'https://via.placeholder.com/100x100.png?text=Fighter2' 
      },
      { 
        id: 3, 
        name: 'Fighter 3', 
        price: 50, 
        strength: 15, 
        agility: 8, 
        image: 'https://via.placeholder.com/100x100.png?text=Fighter3' 
      }
    ]);
  
    // strength of team exercise 5
    const calculateTotalStrength = () => {
      return team.reduce((total, fighter) => total + fighter.strength, 0);
    };
  
    // agility exercise 6
    const calculateTotalAgility = () => {
      return team.reduce((total, fighter) => total + fighter.agility, 0);
    };
  
    // exercise 7
    const handleAddFighter = (fighter) => {
      if (money >= fighter.price) {
        
        setMoney(prevMoney => prevMoney - fighter.price);
  
        
        setTeam(prevTeam => {
          const newTeam = [...prevTeam, fighter];
  
          // Recalculate 
          setTotalStrength(calculateTotalStrength(newTeam));
          setTotalAgility(calculateTotalAgility(newTeam));
  
          return newTeam;
        });
  
        console.log(`${fighter.name} has been added to your team!`);
      } else {
        console.log('Not enough money');
      }
    };
  
    // remove fighter
    const handleRemoveFighter = (fighterId) => {
      // use ID
      const fighterToRemove = team.find(fighter => fighter.id === fighterId);
      if (fighterToRemove) {
        
        const updatedTeam = team.filter(fighter => fighter.id !== fighterId);
  
        
        setTeam(updatedTeam);
  
        
        setMoney(prevMoney => prevMoney + fighterToRemove.price);
  
        
        setTotalStrength(calculateTotalStrength(updatedTeam));
        setTotalAgility(calculateTotalAgility(updatedTeam));
  
        console.log(`${fighterToRemove.name} has been removed from your team!`);
      }
    };
  
    return (
      <div>
        <h1>Zombie Fighter Game</h1>
  
        {/* Displaying current money */}
        <div className="money-display">
          <p>Money: ${money}</p>
        </div>
  
        {/* Displaying total team strength */}
        <div className="strength-display">
          <p>Total Team Strength: {totalStrength}</p>
        </div>
  
        {/* Displaying total team agility */}
        <div className="agility-display">
          <p>Total Team Agility: {totalAgility}</p>
        </div>
  
        <h2>Your Team:</h2>
  
        {/* Check if team is empty */}
        {team.length === 0 ? (
          <p>Pick some team members!</p>
        ) : (
          <ul className="team-list">
            {team.map(fighter => (
              <li key={fighter.id} className="fighter-item">
                <img src={fighter.image} alt={fighter.name} className="fighter-image" />
                <div className="fighter-details">
                  <h3>{fighter.name}</h3>
                  <p>Price: ${fighter.price}</p>
                  <p>Strength: {fighter.strength}</p>
                  <p>Agility: {fighter.agility}</p>
                  <button 
                    onClick={() => handleRemoveFighter(fighter.id)} 
                    className="remove-button">
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
              <img src={fighter.image} alt={fighter.name} className="fighter-image" />
              <div className="fighter-details">
                <h3>{fighter.name}</h3>
                <p>Price: ${fighter.price}</p>
                <p>Strength: {fighter.strength}</p>
                <p>Agility: {fighter.agility}</p>
                <button 
                  onClick={() => handleAddFighter(fighter)} 
                  className="add-button">
                  Add to Team
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default App;