import {
  CATCH_POKEMON_REQUEST,
  CATCH_POKEMON_SUCCESS,
  CATCH_POKEMON_FAILURE,
} from '../actions/catchPokemonAction.js';

const initialState = {
  isCatching: false,
  catchResult: null,
  caughtPokemon: null,
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

// Helper function to generate random Pokemon data for demonstration
const generateRandomPokemon = () => {
  const types = ['grass', 'fire', 'water', 'bug', 'normal', 'poison']; // Add more types as needed
  const randomType = types[Math.floor(Math.random() * types.length)];

  return {
    id: Math.floor(Math.random() * 1000) + 1,
    name: 'Random Pokemon',
    sprite: 'https://example.com/pokemon.png', // Replace with actual sprite URL
    type: [randomType],
  };
};

export default catchReducer;
