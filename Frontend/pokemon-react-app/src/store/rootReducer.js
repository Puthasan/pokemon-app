
import { combineReducers } from 'redux';
import userReducer from '../reducers/userReducer.js';
import myPokemonReducer from '../reducers/myPokemonReducer.js';
// import other reducers

const rootReducer = combineReducers({
  user: userReducer,
  myPokemon: myPokemonReducer,
  // other reducers
});

const store = createStore(rootReducer);