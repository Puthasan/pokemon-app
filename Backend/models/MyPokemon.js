import mongoose from "mongoose";


const myPokemonSchema = new mongoose.Schema({
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

const myPokemonRoutes = mongoose.model("myPokemon", myPokemonSchema);

export default myPokemonRoutes;