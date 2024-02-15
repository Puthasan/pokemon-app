import React from "react";
import { useSelector, useDispatch } from "react-redux";
import catchPokemonAction from "../actions";
import { retrieveCaughtPokemonAction } from "../actions/catchPokemonAction";


function MyPokemon({ userId }) {
  const dispatch = useDispatch();
  // Assuming your Redux store has a 'myPokemon' slice that contains the caught Pokémon
  const caughtPokemon = useSelector((state) => state.myCaughtPokemons);
  dispatch(retrieveCaughtPokemonAction(userId)).then((res) => {console.log("dispatched", res)});
  // console.log("pokemonCaught", pokemonCaught);
  // console.log("caughtPokemon", caughtPokemon);
  return (
    <div>
      <h1>My Pokémon</h1>
        <ul>
          {caughtPokemon.map((pokemon) => (
            <li key={pokemon.pokemon_id}>
              {pokemon.pokemon_name}
              </li>
          ))}
        </ul>

    </div>
  );
}

export default MyPokemon;
