import axios from "axios";

export const CATCH_POKEMON_REQUEST = 'CATCH_POKEMON_REQUEST';
export const CATCH_POKEMON_SUCCESS = 'CATCH_POKEMON_SUCCESS';
export const CATCH_POKEMON_FAILURE = 'CATCH_POKEMON_FAILURE';

export const catchPokemonRequest = () => ({
  type: CATCH_POKEMON_REQUEST,
});

export const catchPokemonSuccess = (isCaught) => ({
  type: CATCH_POKEMON_SUCCESS,
  payload: isCaught,
});

export const catchPokemonFailure = (error) => ({
  type: CATCH_POKEMON_FAILURE,
  payload: error,
});

export const catchPokemonAction = (pokemonId, pokemonName, pokemonSprite, caught_by_user) => async (dispatch) => {
  try {
    dispatch(catchPokemonRequest());

    console.log("in catchPokemonAction");
    console.log(pokemonId, pokemonName, pokemonSprite, caught_by_user);

    
      
      const res = await axios.post("http://localhost:3001/api/caughtPokemon", {
        pokemon_name: pokemonName,
        pokemon_id: pokemonId,
        url_to_sprite: pokemonSprite,
        caught_by_user: caught_by_user
      });
      
      console.log(res.data);
      // setUser(res.data);
      
    } catch (error) {
      console.log(error.message);
    }


  //   // Add your catch logic here
  //   const isCaught = Math.random() < 0.5; // For example, 50% chance of success

  //   dispatch(catchPokemonSuccess(isCaught));
  // } catch (error) {
  //   dispatch(catchPokemonFailure(error.message));
  // }
};