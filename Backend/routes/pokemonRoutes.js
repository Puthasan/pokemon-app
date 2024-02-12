
import  * as pokemonController from '../controllers/pokemonController.js';
import { Router } from 'express';

import Pokemon from "../models/Pokemon.js";

// const pokemonController = require('../controllers/pokemonContoller.js');
const router = new Router();


router.post('/', async (req, res) => {
  const newPokemon = await Pokemon.create(req.body);
  res.status(201).json(newPokemon);

})

router.get('/:id', async (req, res) => {
  try {
    const pokemon = await Pokemon.findOne({ _id: req.params.id });
    res.json(pokemon);
  }
  catch (error) {
    console.log(error);
  }

})

router.put('/:id', async (req, res) => {
  try {
    const pokemon = await Pokemon.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true
    })
    res.json(pokemon);
  } catch (error) {
    console.log(error);
  }

})

router.delete('/:id', async (req, res) => {
  try {
    const pokemon = await Pokemon.findOneAndDelete({ _id: req.params.id }, req.body); {}
    res.json(pokemon);
  } catch (error) {
    console.log(error);
  }

})

// Define Pokemon routes
router.get('/', pokemonController.getPokemonList);
router.post('/', pokemonController.capturePokemon);

export default router;