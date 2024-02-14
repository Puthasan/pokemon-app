import { Router } from 'express';
import User from '../models/Users.js';
import bcrypt from "bcrypt"



const router = new Router();



/**
 * GET /
 * @description returns all users
 */
router.get("/", async (req, res) => {
  const users = await User.find({});
  res.status(200).json(users);
});

// /**
//  * POST /
//  * @description creates a new user 
//  */
// router.post('/', async (req, res) => {
//   const newUser = await User.create(req.body);
//   res.status(201).json(newUser);

// })

/**
 * PUT /:id
 * Here i used a PUT method but a PATCH will be also ok!
 */
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;

    //! Stops request from updating the user's password
    if (body.password) {
      delete body.password;
      console.log("Password removed from body");
    }

    const updatedUser = await User.findByIdAndUpdate(id, body, { new: true });
    res.json(updatedUser);
  } catch (error) {
    console.log(error);
    res.json({ msg: "User Not found!" });
  }
});


/**
 * DELETE /:id
 */
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedUser = await User.findByIdAndDelete(id);
    res.json({ msg: "User deleted", deletedUser });
  } catch (error) {
    console.log(error);
  }
});

// /**
//  * POST /login
//  * @description authenticates an user with email and password
//  */
// router.post("/login", async (req, res) => {
//   const { email, password } = req.body;

//   // find user with the provided email
//   const user = await User.findOne({ email: req.body.email });

//   if (!user) {
//     return res.status(401).json({ msg: "Invalid Credentials" });
//   }

//   // verify provided password with password hash from db
//   const passwordMatched = await bcrypt.compare(password, user.password);

//   if (!passwordMatched) {
//     return res.status(401).json({ msg: "Invalid Credentials password" });
//   }

//   res.json({ msg: "User is logged in!", user });
// });


/**
 * POST /signin
 */
router.post('/signin', async (req, res) => {
  // check if user exist
  // check if password is a match
  // send the db user
  console.log("Sign in request body:", req.body);
  // const user = {_id: '1', email: 'alex@gmail.com', userName: 'alex123'};
  // res.json(user);
  //? check if user exist
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(401).json({ msg: "Invalid Credentials" });
  } 
  //? check if password is a match
  const passwordMatched = await bcrypt.compare(req.body.password, user.password);
  if (!passwordMatched) {
    return res.status(400).json({ msg: "Check credentials!" });
  } else {
    res.json(user);
  }
});

/**
* POST /signup
*/
router.post('/signup', async (req, res) => {
  const { email, username, password } = req.body;
  //? check if email exist
  const existingEmail = await User.findOne({ email });
  //? check if username exist
  const existingUsername = await User.findOne({ username });
  if (existingEmail) {
    return res.status(409).json({ msg: "Email already being used! Please login" });
  } else if (existingUsername) {
    return res.status(409).json({ msg: "Username already exists!" });
  }
  //* useing bcrypt to hash password before storing in db
  const hashedPassword = await bcrypt.hash(password, 10);
  //* create a new user
  const user = await User.create({ email, username, password: hashedPassword });
  res.json(user);
});


export default router