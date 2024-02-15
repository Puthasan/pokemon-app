import axios from "axios";

export const CATCH_POKEMON_REQUEST = 'CATCH_POKEMON_REQUEST';
export const CATCH_POKEMON_SUCCESS = 'CATCH_POKEMON_SUCCESS';
export const CATCH_POKEMON_FAILURE = 'CATCH_POKEMON_FAILURE';
export const RETRIEVE_POKEMON_SUCCESS = 'RETRIEVE_POKEMON_SUCCESS';
export const RETRIEVE_POKEMON_FAILURE = 'RETRIEVE_POKEMON_FAILURE';
export const UPDATE_CAUGHT_POKEMON = 'UPDATE_CAUGHT_POKEMON';

export const updateCaughtPokemonAction = (data) => ({
  type: UPDATE_CAUGHT_POKEMON,
  payload: data
})

export const retrievePokemonSuccess = (data) => ({
  type: RETRIEVE_POKEMON_SUCCESS,
  payload: data
})

export const retrievePokemonFailure = (error) => ({
  type: RETRIEVE_POKEMON_FAILURE,
  payload: error
})

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

export const retrieveCaughtPokemonAction = (caught_by_user) => async (dispatch) => {
  try {
    dispatch(catchPokemonRequest());
    const res = await axios.get("http://localhost:3001/api/caughtPokemon", {
      caught_by_user: caught_by_user
    })
    dispatch(updateCaughtPokemonAction(res.data))

    console.log(res.data)
    return res.data
  } catch (error) {

  }
}

export const catchPokemonAction = (pokemonId, pokemonName, pokemonSprite, caught_by_user) => async (dispatch) => {
  try {
    dispatch(catchPokemonRequest());



    
      
      const res = await axios.post("http://localhost:3001/api/caughtPokemon", {
        pokemon_name: pokemonName,
        pokemon_id: pokemonId,
        url_to_sprite: pokemonSprite,
        caught_by_user: caught_by_user
      });
      
      
    } catch (error) {
      console.log(error.message);
    }


};