import mongoose from "mongoose";

const caughtPokemonSchema = new mongoose.Schema({
  pokemon_name: {
    type: String,
  },
  pokemon_id: {
    type: Number,
  },
  url_to_sprite: {
    type: String,
  },
  caught_by_user: {
    type: String,
  },
});

const caughtPokemonRoutes = mongoose.model("pokemon_caught", caughtPokemonSchema);

export default caughtPokemonRoutes;
