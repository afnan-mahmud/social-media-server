// External Imports
const express = require("express");
const cors = require("cors");

// Internal Imports
const connectDB = require("./db/InitializeDb");
const signupRouter = require("./routers/signupRouter");

// Initialize
const app = express();
require("dotenv").config();

// Request Parser
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// Database Initialize
connectDB();

// Router
// app.use("/login", loginRouter);
app.use("/signup", signupRouter);

//Server Port
app.listen(process.env.SERVER_PORT, () => {
  console.log("server listening");
});
