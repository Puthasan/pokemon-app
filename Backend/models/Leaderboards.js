import mongoose from "mongoose";

const leaderboardSchema = new mongoose.Schema({
  first_place: {
    type: Number,
  },
  second_place: {
    type: Number,
  },
  third_place: {
    type: Number,
  }
});


const Leaderboard = mongoose.model('Leaderboard', leaderboardSchema);

export default Leaderboard