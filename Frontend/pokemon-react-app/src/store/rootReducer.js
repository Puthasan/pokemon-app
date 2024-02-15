
import { combineReducers } from 'redux';
import userReducer from '../reducers/userReducer.js';
// import other reducers

const rootReducer = combineReducers({
  user: userReducer,
  // other reducers
});

export default rootReducer;