import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'; 
import rootReducer from './reducers';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';


// Create Redux store with middleware
const store = createStore(rootReducer, applyMiddleware(thunk));

// Wrap your app with the Provider and pass the store
const root = createRoot(document.getElementById('root'));

root.render(

    <BrowserRouter>

    <Provider store={store}>

    <App />

    </Provider>
    </BrowserRouter>
);