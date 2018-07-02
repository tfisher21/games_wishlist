var mongoose = require("mongoose");

var wishlistSchema = new mongoose.Schema({
  name: String,
  gbLink: String,
  deck: String,
  release: String,
  icon: String
});

module.exports = mongoose.model("Wishlist", wishlistSchema);