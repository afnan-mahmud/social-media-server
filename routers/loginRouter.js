// External Imports
const express = require("express");
const loginController = require("../controller/loginController");

// Internal Imports

// make router
const loginRouter = express.Router();

// post routing
loginRouter.post("/", loginController);

// exports
module.exports = loginRouter;
