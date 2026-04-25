const mongoose = require("mongoose");

const musicschema = new mongoose.Schema({
  uri: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    require: true,
  },
  artist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    reqired: true,
  },
});

const musicModel = mongoose.model("music", musicschema);

module.exports = musicModel;
