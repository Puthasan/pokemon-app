import {
  CATCH_POKEMON_REQUEST,
  CATCH_POKEMON_SUCCESS,
  CATCH_POKEMON_FAILURE,
} from '../actions/catchPokemonAction.js';

const initialState = {
  isCatching: false,
  catchResult: null,
  caughtPokemons: [],
  error: null,
};

const catchReducer = (state = initialState, action) => {
  switch (action.type) {
    case CATCH_POKEMON_REQUEST:
      return {
        ...state,
        isCatching: true,
        catchResult: null,
        caughtPokemon: null,
        error: null,
      };

    case CATCH_POKEMON_SUCCESS:
      return {
        ...state,
        isCatching: false,
        catchResult: action.payload,
        caughtPokemon: action.payload ? generateRandomPokemon() : null,
        error: null,
      };

    case CATCH_POKEMON_FAILURE:
      return {
        ...state,
        isCatching: false,
        catchResult: null,
        caughtPokemon: null,
        error: action.payload,
      };

    default:
      return state;
  }
};


export default catchReducer;
