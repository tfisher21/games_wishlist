var mongoose = require("mongoose");

var gameSchema = new mongoose.Schema({
  name: String,
  link: String,
  release: Date,
  icon: String,
  developer: String,
  publisher: String
});

module.exports = mongoose.model("Game", gameSchema);