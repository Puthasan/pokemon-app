import mongoose from 'mongoose';



const pokemonSchema = new mongoose.Schema({
  poekemon_name: {
    type: String,
  }, 
  pokemon_id: {
    type: Number,
  },
  url_to_sprite: {
    type: String,
  },
  caught_by_user: {
    type: Number
  }
});

const Pokemon = mongoose.model('Pokemon', pokemonSchema);

export default Pokemon;