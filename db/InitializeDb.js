require("dotenv").config();
const mongoose = require("mongoose");
const dbUrl = `mongodb+srv://afnanmahmudafif:${process.env.DB_PASSWORD}@cluster0.awcwjdu.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`;

async function connectDB() {
  try {
    await mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (err) {
    console.log(err);
  }
}

module.exports = connectDB;
