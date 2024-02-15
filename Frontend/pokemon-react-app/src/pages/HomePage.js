import { fetchDataAction } from "../actions/fetchPokemonAction"; // Import your action(s) here
import { useDispatch } from "react-redux";
import { useState } from "react";


function HomePage({data}) {
  const dispatch = useDispatch();
  const [pokemonName, setPokemonName] = useState("");

  const fetchData = () => {
    
    if (pokemonName.trim() !== "") {
      // Only dispatch if the input is not empty
      dispatch(fetchDataAction(pokemonName));
    }
  };
  
  const handleInputChange = (event) => {
  setPokemonName(event.target.value);
  }
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
  
  
  return(
    <div>
    <h1>Pokédex</h1>
    <label>
      Enter Pokémon Name or ID:
      <input type="text" value={pokemonName} onChange={handleInputChange} />
    </label>
    <button onClick={fetchData}>Search Pokémon</button>
    {data ? (
      <div>
        <img src={data.sprite} alt={data.name} />
        <p>
          Name: {data.name.charAt(0).toUpperCase() + data.name.substring(1)}
        </p>
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
      <p>Enter a Pokémon name or ID and click "Search Pokémon"</p>
      )}
  </div>
);
}



export default HomePage;