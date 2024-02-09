import { combineReducers } from 'redux';
import dataReducer from '../store/index.js';
import { STORE_DATA } from '../actions/index.js';

const initialState = {
  data: null,
}

const rootReducer = combineReducers({
  data: dataReducer,
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

