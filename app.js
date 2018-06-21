var express = require("express"),
    app     = express(),
    request = require("request"),
    bodyParser = require("body-parser"),
    Wishlist = require("./models/wishlist"),
    mongoose = require("mongoose");

require("dotenv").load();
mongoose.connect("mongodb://localhost/crm");
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

// GLOBAL VARIABLES
var apiString = "?api_key=" + process.env.gbapi + "&format=JSON";

////////////
// ROUTES //
////////////

// INDEX - LANDING
app.get("/", function(req, res){
  Wishlist.find({}, function(err, allWishlists){
      if (err) {
          console.log(err);
      } else {
          res.render("landing", {wishlist: allWishlists});
      }
  });
});

// SEARCH RESULTS
app.get("/search", function(req, res){
    var query = req.query.query;
    var url = "https://www.giantbomb.com/api/releases/" + apiString + "&filter=region:1,platform:157,name:" + query;
    
    request(url, function(error, response, body){
        if (!error && response.statusCode == 200) {
            var data = JSON.parse(body);
            res.render("results", {data:data});
        }
    });
});

// CREATE - Add selected title to wishlist
app.post("/wishlist", function(req, res){
    var url = req.body.gameAPIurl + apiString;
    
    request(url, function(error, response, body){
        if (!error && response.statusCode == 200) {
            var data = JSON.parse(body);
            
            var name = data.results.name;
            var gbLink = data.results.site_detail_url;
            var deck = data.results.deck;
            var newWishlist = {name: name, gbLink: gbLink, deck: deck};
            
            Wishlist.create(newWishlist, function(err, newlyCreated){
                if (err) {
                    console.log(err);
                } else {
                    res.redirect("/");
                }
            });
        }
    });
});

//////////////////////////////
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The Server is Online!");
});