const express = require('express');
const router = express.Router();
const Leaderboard = require('../models/Leaderboards.js'); // Import your Leaderboard model

// GET leaderboard
router.get('/', async (req, res) => {
  try {
    const leaderboard = await Leaderboard.findOne();
    res.json(leaderboard);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// POST a new leaderboard or update existing
router.post('/', async (req, res) => {
  try {
    const leaderboardData = req.body; // Assuming the new leaderboard data is sent in the request body

    // Find the existing leaderboard or create a new one if none exists
    let leaderboard = await Leaderboard.findOne();
    if (!leaderboard) {
      leaderboard = new Leaderboard(leaderboardData);
    } else {
      leaderboard.set(leaderboardData);
    }

    // Save the leaderboard to the database
    const savedLeaderboard = await leaderboard.save();
    res.json(savedLeaderboard);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
