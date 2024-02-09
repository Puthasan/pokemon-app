import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  STORE_DATA
} from '../actions/index.js';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialDataState = {
  data: null,
  loading: false,
  error: null,
};

const dataReducer = (state = initialDataState, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case STORE_DATA:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
  
};

const rootReducerCombined = combineReducers({
  data: dataReducer,
  // Add more reducers as needed
});

const store = createStore(
  rootReducerCombined,
  composeEnhancers(applyMiddleware(thunk))
)


export default store;