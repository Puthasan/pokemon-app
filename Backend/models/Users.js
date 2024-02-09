import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
  user_id: {
    type: Number,
  },
  username: {
    type: String,
    required: true
  }, 
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

const User = mongoose.model('User', userSchema);

export default User;