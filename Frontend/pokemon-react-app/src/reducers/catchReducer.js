import {
  CATCH_POKEMON_REQUEST,
  CATCH_POKEMON_SUCCESS,
  CATCH_POKEMON_FAILURE,
  RETRIEVE_POKEMON_FAILURE,
  RETRIEVE_POKEMON_SUCCESS,
  UPDATE_CAUGHT_POKEMON
} from '../actions/catchPokemonAction.js';

const initialState = {
  isCatching: false,
  catchResult: null,
  caughtPokemons: [],
  error: null,
};

const catchReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CAUGHT_POKEMON:
      return {
        ...state,
        caughtPokemons: action.payload,
        error: null,
      }
    case RETRIEVE_POKEMON_SUCCESS:
      return {
        ...state,
        caughtPokemons: action.payload,
        error: null,
      }
    case RETRIEVE_POKEMON_FAILURE:
      return {
        ...state,
        caughtPokemons: [],
        error: action.payload,
        
      }
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
