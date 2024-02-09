import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataAction } from "../actions/index.js"; // Import your action(s) here


function App() {
  const dispatch = useDispatch();
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


  const fetchData = () => {
    const id = Math.floor(Math.random() * 1302) + 1;
    dispatch(fetchDataAction(id));
  };
  // console.log("hello",fetchData())
  
  return (
    <div className="App">
      <h1>My Pokemon App</h1>
      <button onClick={fetchData}>Fetch Random Pokemon Data</button>
      {data ? (
        <div>
          <img src={data.sprite} alt={data.name} />
          <p>Name: {data.name}</p>
          <p>
            Type:{" "}
            {Array.isArray(data.type)
              ? data.type.map((type, index) => (
                  <span key={index}>
                    {type} {typeEmojis[type]}{" "}
                  </span>
                ))
              : `${data.type} ${typeEmojis[data.type]}`}
          </p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
