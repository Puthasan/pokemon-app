

const initialState = {
  // other user-related properties
  myPokemon: { myCaughtPokemons: [] },
};

const myPokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'RETRIEVE_CAUGHT_POKEMON':
      return {
        ...state,
        myCaughtPokemons: [...state.myCaughtPokemons, action.payload],
      };
    // handle other user-related actions
    default:
      return state;
  }
};

export default myPokemonReducer;

