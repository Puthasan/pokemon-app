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

export const catchPokemonAction = () => async (dispatch) => {
  try {
    dispatch(catchPokemonRequest());

    // Add your catch logic here
    const isCaught = Math.random() < 0.5; // For example, 50% chance of success

    dispatch(catchPokemonSuccess(isCaught));
  } catch (error) {
    dispatch(catchPokemonFailure(error.message));
  }
};