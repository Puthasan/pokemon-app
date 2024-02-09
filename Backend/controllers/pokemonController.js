import Pokemon from '../models/Pokemon.js';



const getPokemonList = async (req, res) => {
  try {
    const pokemonList = await Pokemon.find();
    res.json(pokemonList);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const capturePokemon = async (req, res) => {
  const { name } = req.body;
  try {
    const newPokemon = new Pokemon({ name, captured: false });
    await newPokemon.save();
    res.json(newPokemon);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export { getPokemonList, capturePokemon };