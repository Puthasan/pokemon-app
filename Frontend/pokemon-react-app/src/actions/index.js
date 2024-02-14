export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
export const STORE_DATA = 'STORE_DATA';


export const fetchDataRequest = () => ({
  type: FETCH_DATA_REQUEST,
});

export const fetchDataSuccess = (data) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});

export const fetchDataFailure = (error) => ({
  type: FETCH_DATA_FAILURE,
  payload: error,
});

export const storeDataAction = (data) => ({
  type: STORE_DATA,
  payload: data,
});


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




export const fetchDataAction = (pokemonId) => async (dispatch) => {
  try {
    dispatch(fetchDataRequest());

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
    const data = await response.json();

    if (data.id) {
      const types = data.types.map((typeObj) => typeObj.type.name);
      const pokemonWithDetails = {
        id: data.id,
        name: data.name,
        sprite: data.sprites.front_default,
        type: types,
      };

      dispatch(storeDataAction(pokemonWithDetails));
      dispatch(fetchDataSuccess(pokemonWithDetails));
    } else {
      console.log('Invalid data received:', data);
    }
  } catch (error) {
    dispatch(fetchDataFailure(error.message));
  }
};



export default catchPokemonAction; fetchDataAction; 