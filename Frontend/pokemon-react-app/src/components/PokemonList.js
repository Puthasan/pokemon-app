import { Link } from "react-router-dom";


const PokemonList = ({ pokemons }) => {
  return (
    <div>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.id}>
            <Link to={`/pokemon/${pokemon.id}`}>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                alt={pokemon.name}
              />
              <p>{pokemon.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};




export default PokemonList;