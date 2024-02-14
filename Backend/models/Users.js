import mongoose from "mongoose";
import bcrypt from "bcrypt"

const SALT_ROUNDS = 10


const userSchema = new mongoose.Schema({
  user_id: {
    type: Number,
  },
  username: {
    type: String,
    required: true,
    unique: true
  }, 
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
}, {
  timestamps: true,
  toJSON: {
    transform: function(doc, retDoc) {
      delete retDoc.password;
      return retDoc;
    }
  }
});

userSchema.index({email: 1});
userSchema.index({username: 1});


userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hashSync(this.password, SALT_ROUNDS)
  return next()
})
const User = mongoose.model('User', userSchema);

export default User;