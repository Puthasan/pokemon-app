import { Router } from 'express';
import MyPokemon from '../models/MyPokemon.js';
const router = new Router();


router.get('/', async (req, res) => {
  try {
    const myPokemon = await MyPokemon.find();
    res.json(myPokemon);
  }
  catch (error) {
    console.log(error);
  }

})

router.post('/', async (req, res) => {
  try {
    const newPokemon = new MyPokemon(req.body);
    await newPokemon.save();
  } catch (error) {
    console.error(error);
  }
})

export default router