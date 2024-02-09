import mongoose from 'mongoose';



const pokemonSchema = new mongoose.Schema({
  name: String,
  captured: Boolean,
});

const Pokemon = mongoose.model('Pokemon', pokemonSchema);

export default Pokemon;