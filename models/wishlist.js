var mongoose = require("mongoose");

var wishlistSchema = new mongoose.Schema({
  name: String,
  gbLink: String,
  deck: String,
});

module.exports = mongoose.model("Wishlist", wishlistSchema);