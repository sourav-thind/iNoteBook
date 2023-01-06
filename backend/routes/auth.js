const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser')

const JWT_SECRET = "I am sourav";

// Route: 1 Create a User using POST "/api/auth/createuser" , No login requireds
router.post('/createuser',[
    body('email').isEmail(),
    body('name').isLength({ min: 3 }),
], async (req,res)=>{
  let success = false;
   // if there are errors return bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({success, errors: errors.array() });
      }
      try {
        
      
      //check whether user with this email exist already
      let user = await User.findOne({email:req.body.email})
      if(user){
        return res.status(400).json({success, error : "Sorry a user with this email already exist"})
      }
      const salt = await bcrypt.genSalt(10);
      secPass = await bcrypt.hash(req.body.password,salt)
      //create a new user
      user= await User.create({
        name: req.body.name,
        password: secPass,
        email: req.body.email,
      })
      const data = {
        user:{
          id: user.id
        }
      }
      const authToken = jwt.sign(data , JWT_SECRET);
      console.log(authToken);
      success = true;
      res.json({success, authToken} );
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Error occured");
    }
})

//Route: 2 Authenticating a User using POST "/api/auth/login" , No login requireds
router.post('/login',[
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'password can not be blank').exists(),
], async (req,res)=>{
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const {email,password} = req.body;
  try {
    let user = await User.findOne({email});
    if(!user){
    return res.status(400).json({error: "Please login with correct credentials"});
    } 
    const passwordCompare = await bcrypt.compare(password, user.password);
    if(!passwordCompare){
      success = false;
      return res.status(400).json({success, error: "Please login with correct credentials"});
    }

    const data = {
      user:{
        id:user.id
            }
    }

    const authToken = jwt.sign(data, JWT_SECRET);
    success=true;
    res.json({success,authToken})


  } catch (error) {
    console.log(error.message);
        res.status(500).send("Internal Server Error");
  }
})

//Route:3 Getting user details using POST "/api/auth/getuser" ,login requireds
router.post('/getuser', fetchuser , async (req,res)=>{
try {
  let userid = req.user.id;
  const user = await User.findById(userid).select("-password");
res.send(user)
  
} catch (error) {
  console.log(error.message);
      res.status(500).send("Internal Server Error");
}
})
module.exports =router