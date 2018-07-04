var express         = require("express"),
    app             = express(),
    request         = require("request"),
    bodyParser      = require("body-parser"),
    methodOverride  = require("method-override"),
    mongoose        = require("mongoose");
    
var Game        = require("./models/game"),
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

// INDEX - List games currently in database.
app.get("/games", function(req, res){
  Game.find({}, function(err, allGames){
      if (err) {
          console.log(err);
      } else {
          res.render("games", {games: allGames});
      }
  });
});

// NEW - Display Search Results.
app.get("/games/search", function(req, res){
    
    var query = req.query.query;
    var url = "https://www.giantbomb.com/api/games/" + apiString + "&sort=name:down&filter=platforms:157,name:" + query;
    
    request(url, function(error, response, body){
        if (!error && response.statusCode == 200) {
            var data = JSON.parse(body);
            res.render("search", {query:query, data:data});
        }
    });
});

// CREATE - Add selected game to database.
app.post("/games", function(req, res){
    var name = req.body.name;
    var gbLink = req.body.gbLink;
    var release = req.body.release;
    var icon = req.body.icon;
    var newGame = {
        name: name,
        gbLink: gbLink,
        release: release,
        icon: icon
    };
    
    Game.create(newGame, function(err, newlyCreated){
        if (err) {
            console.log(err);
        } else {
            res.redirect("/");
        }
    });
});

// DESTROY - Remove game from game.
app.delete("/games/:id", function(req, res){
    Game.findByIdAndRemove(req.params.id, function(err){
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
