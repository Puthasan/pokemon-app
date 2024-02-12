import express from 'express';
import mongoose from 'mongoose';
import "./loadEnv.js";
import { conn } from "./db/conn.js";conn();

import pokemonRoutes from './routes/pokemonRoutes.js';
import userRoutes from './routes/users.js'

const app = express();
const PORT = process.env.PORT || 3001;



app.use(express.json());

// Routes
app.use('/api/pokemon', pokemonRoutes);
app.use('/api/users', userRoutes);


app.get('/', (req, res) => {
  res.send('Welcome to the API');
});




app.use((err, _req, res, next) => {
  res.status(500).send("Seems like we messed up somewhere...");
});


app.listen(PORT, async () => {
  try {
    console.log(`Server running on port: ${PORT}`);
    await mongoose.connect(process.env.ATLAS_URI);
    console.log(`Connected to MongoDB`);
  } catch (error) {
    console.log(error);
  }
});
