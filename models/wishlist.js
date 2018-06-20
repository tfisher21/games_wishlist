var mongoose = require("mongoose");

var wishlistSchema = new mongoose.Schema({
  name: String,
  gbLink: String,
  platform: String
});

module.exports = mongoose.model("Wishlist", wishlistSchema);