import  db  from "../db/conn.js";
import  * as pokemonController from '../controllers/pokemonController.js';
import { ObjectId } from 'mongodb';
import { Router } from 'express';

// const pokemonController = require('../controllers/pokemonContoller.js');
const router = new Router();


router.post('/', async (req, res) => {
  const collection = await db.collection('users');
  const newUser = {
    userName: req.body.name,
    email: req.body.email,
    password: req.body.password
  };
  console.log(newUser);
  const result = await collection.insertOne(newUser);
  res.send(result).status(204);
})

router.get('/:id', async (req, res) => {
  const collection = await db.collection('pokemon_caught');
  console.log(collection);
  const query = {
    _id: new ObjectId(req.params.id)
  }
  const result = await collection.findOne(query);
  res.send(result);
})

router.put('/:id', async (req, res) => {
  const collection = await db.collection('users');
  const query = {
    _id: ObjectId(req.params.id)
  }
  collection.updateOne({_id: query},{$push: {pokemons: req.body.pokemon}})
  
})

// Define Pokemon routes
router.get('/', pokemonController.getPokemonList);
router.post('/', pokemonController.capturePokemon);

export default router;