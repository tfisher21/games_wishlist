var express         = require("express"),
    app             = express(),
    request         = require("request"),
    bodyParser      = require("body-parser"),
    methodOverride  = require("method-override"),
    mongoose        = require("mongoose");
    
var Wishlist        = require("./models/wishlist"),
    seedDB          = require("./seeds");

require("dotenv").load();
mongoose.connect("mongodb://localhost/crm");
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(methodOverride('_method'));
app.use(express.static(__dirname + '/public'));

// GLOBAL VARIABLES
var apiString = "?api_key=" + process.env.gbapi + "&format=JSON";

seedDB();

////////////
// ROUTES //
////////////

// INDEX - Wishlist page and search bar.
app.get("/", function(req, res){
  Wishlist.find({}, function(err, allWishlists){
      if (err) {
          console.log(err);
      } else {
          res.render("index", {wishlist: allWishlists});
      }
  });
});

// NEW - Display Search Results.
app.get("/search", function(req, res){
    
    var query = req.query.query;
    var url = "https://www.giantbomb.com/api/games/" + apiString + "&sort=name:down&filter=platforms:157,name:" + query;
    
    request(url, function(error, response, body){
        if (!error && response.statusCode == 200) {
            var data = JSON.parse(body);
            res.render("results", {data:data});
        }
    });
});

// CREATE - Add selected title to wishlist.
app.post("/wishlist", function(req, res){
    var name = req.body.name;
    var gbLink = req.body.gbLink;
    var deck = req.body.deck;
    var newWishlist = {name: name, gbLink: gbLink, deck: deck};
    
    Wishlist.create(newWishlist, function(err, newlyCreated){
        if (err) {
            console.log(err);
        } else {
            res.redirect("/");
        }
    });
});

// DESTROY - Remove game from wishlist.
app.delete("/wishlist/:id", function(req, res){
    Wishlist.findByIdAndRemove(req.params.id, function(err){
        if (err) {
            console.log(err);
        }
        res.redirect("/");
    })
});

//////////////////////////////
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The Server is Online!");
});
