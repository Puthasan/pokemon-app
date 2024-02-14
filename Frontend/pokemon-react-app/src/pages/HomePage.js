import { fetchDataAction } from "../actions/fetchPokemonAction"; // Import your action(s) here
import { useDispatch } from "react-redux";


function HomePage({data}) {
  const dispatch = useDispatch();
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


  return(
    <div>
      <h1>Random Pokemon</h1>
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
    </div>
  );
}

export default HomePage;