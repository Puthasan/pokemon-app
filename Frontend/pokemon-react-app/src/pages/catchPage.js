
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { catchPokemonAction } from "../actions/catchPokemonAction";
import { fetchDataAction } from "../actions/fetchPokemonAction";
import { addCaughtPokemonAction } from "../actions/userActions";

// Define the CatchPage component
function CatchPage({ data, userId }) {
  console.log("this is the catchpage",data)
  console.log("user", userId);
  const dispatch = useDispatch();
  const isCatching = useSelector((state) => state.isCatching);
  const catchResult = useSelector((state) => state.catchResult);
  const caughtPokemon = useSelector((state) => state.caughtPokemon); // Assuming you have a state for caught Pokemon
  
  // Function to handle throwing the pokeball
  const throwPokeball = () => {
    // console.log("in throwPokeball");
    // console.log(userId);
    // console.log(data);
    const pokemonId = data.id;
    const pokemonName = data.name;
    const pokemonSprite = data.sprite
    const caught_by_user = userId;
    // if (catchResult){
    //   dispatch(addCaughtPokemonAction(data))
    // }
    // dispatch(catchPokemonAction());
    dispatch(catchPokemonAction( pokemonId, pokemonName, pokemonSprite, caught_by_user ));
  };
  
  const fetchData = () => {
    const id = Math.floor(Math.random() * 1000) + 1;
    dispatch(fetchDataAction(id));
  };

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




  return (
    
    <div>
      <h1>Catch Pokemon</h1>
      <button onClick={fetchData}>Fetch Random Pokemon Data</button>
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
        <p>Loading...</p>
        )}
        <button onClick={throwPokeball}>Throw Pokeball</button>
      
        
        {/* <button onClick={throwPokeball}>Throw Pokeball</button> */}
  
        {isCatching && (
          <div>
            {catchResult ? (
              <div>
                <p>Success! You caught the Pokemon!</p>
                {caughtPokemon && (
                  <div>
                    <img src={caughtPokemon.sprite} alt={caughtPokemon.name} />
                    <p>Name: {caughtPokemon.name}</p>
                    <p>Type: {caughtPokemon.type.join(", ")}</p>
                    {/* Add more details as needed */}
                  </div>
                )}
              </div>
            ) : (
              <p>Oh no! The Pokemon got away!</p>
            )}
          </div>
        )}
    </div>
    
  );
  
}

export default CatchPage;
