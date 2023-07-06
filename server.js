// External Imports
const express = require("express");

// Initialize
const app = express();
require("dotenv").config();

//Server Port
app.listen(process.env.SERVER_PORT, () => {
  console.log("server listening");
});
