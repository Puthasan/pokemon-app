import { Router } from 'express';
import User from '../models/User.js';

const router = new Router();


router.post('/', async (req, res) => {
  const newUser = await User.create(req.body);
  res.status(201).json(newUser);

})