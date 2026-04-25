const mongoose = require("mongoose");
require("dotenv").config();

async function connectdb() {
  try {
    await mongoose.connect(process.env.Mongo_url);
    console.log("database connected sucessfully");
  } catch (error) {
    console.log("database is not connected");
  }
}

module.exports = connectdb;
