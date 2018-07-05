var mongoose = require("mongoose");

var gameSchema = new mongoose.Schema({
  name: String,
  gbLink: String,
  release: Date,
  icon: String
});

module.exports = mongoose.model("Game", gameSchema);