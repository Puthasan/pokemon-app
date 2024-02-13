import { Link } from "react-router-dom";


function PokemonItem({ pokemon }) {
  return (
    <li>
      <Link to={`/pokemon/${pokemon.id}`}>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
          alt={pokemon.name}
        />
        <p>{pokemon.name}</p>
      </Link>
    </li>
  );
}

export default PokemonItem;