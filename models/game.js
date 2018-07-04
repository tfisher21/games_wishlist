var mongoose = require("mongoose");

var gameSchema = new mongoose.Schema({
  name: String,
  gbLink: String,
  release: String,
  icon: String
});

module.exports = mongoose.model("Game", gameSchema);