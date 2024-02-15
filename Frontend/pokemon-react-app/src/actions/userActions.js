// import { createAction } from "@reduxjs/toolkit";}


export const addCaughtPokemonAction = (pokemon) => {
  return {
    type: 'ADD_CAUGHT_POKEMON',
    payload: pokemon,
  };
};

