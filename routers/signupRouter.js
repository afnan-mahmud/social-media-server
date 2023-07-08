// External Imports
const express = require("express");

// Internal Imports
const signupController = require("../controller/signupController");

// make router
const signupRouter = express.Router();

// post routing
signupRouter.post("/", signupController);

// exports
module.exports = signupRouter;
