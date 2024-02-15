import { Router } from 'express';
import CaughtPokemon from '../models/CaughtPokemon.js';
const router = new Router();
// import { setUser } from "../../Frontend/pokemon-react-app/src/pages/LoginSignUp.js";


// const CaughtPokemon = require('../models/CaughtPokemon.js'); // Import your CaughtPokemon model



// GET all caught pokemons
router.get('/', async (req, res) => {
  // const user =  setUser()
  // const { setUser } = userctx


  try {
    const caughtPokemons = await CaughtPokemon.find();
    res.json(caughtPokemons);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

router.post('/', async (req, res) => {
  console.log(req.body)
  try {
    const newPokemon = new CaughtPokemon(req.body);
    await newPokemon.save();
    res.json(newPokemon);

    console.log(newPokemon);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }



  // const pokemon_caught = await CaughtPokemon.create(req.body);
  // res.json(pokemon_caught);
  // const pokemon_caught = await pokemon_caught.create({} });
  // res.json(pokemon_caught);
});


export default router;