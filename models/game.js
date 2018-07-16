var mongoose = require("mongoose");

var gameSchema = new mongoose.Schema({
  name: String,
  link: String,
  release: Date,
  icon: String,
});

module.exports = mongoose.model("Game", gameSchema);