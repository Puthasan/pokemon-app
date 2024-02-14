
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { catchPokemonAction } from "../actions/catchPokemonAction";

// Define the CatchPage component
function CatchPage() {
  const dispatch = useDispatch();
  const isCatching = useSelector((state) => state.isCatching);
  const catchResult = useSelector((state) => state.catchResult);
  const caughtPokemon = useSelector((state) => state.caughtPokemon); // Assuming you have a state for caught Pokemon

  // Function to handle throwing the pokeball
  const throwPokeball = () => {
    dispatch(catchPokemonAction());
  };

  return (
    <div>
      <h1>Catch Pokemon</h1>
      <button onClick={throwPokeball} disabled={isCatching}>
        {isCatching ? "Catching..." : "Throw Pokeball"}
      </button>

      {isCatching && (
        <div>
          {catchResult ? (
            <div>
              <p>Success! You caught the Pokemon!</p>
              {caughtPokemon && (
                <div>
                  <img src={caughtPokemon.sprite} alt={caughtPokemon.name} />
                  <p>Name: {caughtPokemon.name}</p>
                  <p>Type: {caughtPokemon.type.join(", ")}</p>
                  {/* Add more details as needed */}
                </div>
              )}
            </div>
          ) : (
            <p>Oh no! The Pokemon got away!</p>
          )}
        </div>
      )}
    </div>
  );
}

export default CatchPage;
