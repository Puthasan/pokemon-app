import React from "react";
import { useDispatch, useSelector } from "react-redux";
import HomePage from "../pages/HomePage.js";
import LoginSignUp from "../pages/LoginSignUp.js";
import { UserContext } from "../context/UserContext";
import { useState } from "react";


function App() {
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);
  const data = useSelector((state) => state.data); // Assuming "data" is a piece of state in your Redux store

  const typeEmojis = {
    grass: "🌿",
    fire: "🔥",
    water: "💧",
    bug: "🐞",
    normal: "🧑",
    poison: "☠️",
    electric: "⚡",
    ground: "🌍",
    fairy: "🧚",
    fighting: "🥊",
    psychic: "🧠",
    rock: "⛰️",
    ghost: "👻",
    ice: "❄️",
    dragon: "🐉",
    steel: "🛡️",
    flying: "🕊️",
    dark: "🌑",
    ghost: "👻",
    unknown: "❓",
    shadow: "👤",
    // Add more types and emojis as needed
  };

  console.log(data)



  return (
    <UserContext.Provider value={{ user, setUser }}>

    
    <div className="App">
      {user ? <HomePage 
      data = {data}/> : <LoginSignUp/>
} 
    </div>
      </UserContext.Provider>
  );
}

export default App;
