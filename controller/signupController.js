// External Imports
const jwt = require("jsonwebtoken");
require("dotenv").config();

// Internal Imports
const User = require("../db/model/signupUserModel");

// Sign up user functionality
async function signupController(req, res, next) {
  const checkUser = await User.findOne({ email: req.body.email });

  if (checkUser) {
    return res.status(400).json({
      errors: "You are already registered, please login",
    });
  } else {
    const newUser = new User({ ...req.body });

    try {
      await newUser.save();
      const token = jwt.sign(
        {
          name: newUser.name,
          email: newUser.email,
        },
        process.env.JWT_PRIVATE_KEY,
        {
          notBefore: "2 days",
        },
        function (err, token) {
          if (err) {
            console.log(err);
          }
        }
      );
      return res.status(200).json({
        access_token: token,
        message: "Account Registration Successfully",
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        error: "Internet Server Error!",
      });
    }
  }
}

//Exports
module.exports = signupController;
