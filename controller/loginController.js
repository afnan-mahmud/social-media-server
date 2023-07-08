// External Imports
const jwt = require("jsonwebtoken");
require("dotenv").config();

// Internal Imports
const User = require("../db/model/signupUserModel");

// Functions
async function loginController(req, res, next) {
  const checkUser = await User.findOne({
    email: req.body.email,
    password: req.body.password,
  });

  if (checkUser === null) {
    res.status(401).json({
      errors: "Email or Password didn't match",
    });
  } else {
    // create user token
    const token = await jwt.sign(
      {
        name: checkUser.name,
        email: checkUser.email,
      },
      process.env.JWT_PRIVATE_KEY,
      {
        notBefore: "2 days",
      },
      function (err, token) {
        res.status(200).json({
          data: {
            info: {
              name: checkUser.name,
              email: checkUser.email,
            },
            message: "You're login successfully",
            access_token: token,
          },
        });
      }
    );
  }
}

// Exports
module.exports = loginController;
