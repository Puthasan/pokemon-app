


const initialState = {
  // other user-related properties
  caughtPokemons: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CAUGHT_POKEMON':
      return {
        ...state,
        caughtPokemons: [...state.caughtPokemons, action.payload],
      };
    // handle other user-related actions
    default:
      return state;
  }
};

export default userReducer;