import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { catchPokemonAction } from "../actions/catchPokemonAction";
// import { retrieveCaughtPokemonAction } from "../actions/catchPokemonAction";
// import {state} from "../reducers/myPokemonReducer"
import { addCaughtPokemonAction } from "../actions/userActions";
// import { myPokemonReducer } from "../reducers/myPokemonReducer";


function MyPokemon({ data, userId }) {
  const dispatch = useDispatch();
  const catchResult = useSelector((state) => state.catchResult);
  // const myCaughtPokemons = useSelector((state) => state.myPokemon.myCaughtPokemons);
  // Assuming your Redux store has a 'myPokemon' slice that contains the caught Pokémon
  const catchAndAddPokemon = () => {
    if (!data || !data.id || !data.name || !data.sprite) {
      // Handle the case where data is undefined or does not have the expected structure
      console.error('Invalid data object:', data);
      return;
    }
    const pokemonId = data.id
    const pokemonName = data.name;
    const pokemonSprite = data.sprite
    const caught_by_user = userId;

    dispatch(catchPokemonAction( pokemonId, pokemonName, pokemonSprite, caught_by_user ));
    if (catchResult) {
      dispatch(addCaughtPokemonAction( pokemonId, pokemonName, pokemonSprite, caught_by_user ));
    }
  }
  // dispatch(retrieveCaughtPokemonAction(userId)).then((res) => {console.log("dispatched", res)});
  // console.log("pokemonCaught", pokemonCaught);
  // console.log("caughtPokemon", caughtPokemon);
  return (
    <div>
      <h1>My Pokémon</h1>
      <li>
        (this is supposed to display stored pokemon)
        <button onClick={catchAndAddPokemon}>Caught Pokemon</button>
      </li>
        <ul>
          {/* {myCaughtPokemons.map((pokemon) => (
            <li key={pokemon.pokemon_id}>
              {pokemon.pokemon_name}
              </li>
          ))} */}
        </ul>

    </div>
  );
}

export default MyPokemon;
