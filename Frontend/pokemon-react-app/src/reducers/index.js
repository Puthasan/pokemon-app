import { combineReducers } from 'redux';
import dataReducer from '../store/index.js';
import { STORE_DATA } from '../actions/fetchPokemonAction.js';
import catchReducer from './catchReducer.js';

const initialState = {
  data: null,
}

const rootReducer = combineReducers({
  data: dataReducer,
  catch: catchReducer,
  // Add more reducers as needed
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_DATA:
      return {
        ...state,
        data: action.payload, // Update the state with the fetched data
      };
    default:
      return state;
  }
};

export default reducer; rootReducer;

