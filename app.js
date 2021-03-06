const   express         = require("express"),
        app             = express(),
        request         = require("request"),
        bodyParser      = require("body-parser"),
        methodOverride  = require("method-override"),
        mongoose        = require("mongoose"),
        igdb            = require('igdb-api-node').default;
    
var Game        = require("./models/game"),
    seedDB          = require("./seeds");

require("dotenv").load();
mongoose.connect("mongodb://localhost/crm");
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(methodOverride('_method'));
app.use(express.static(__dirname + '/public'));

// GLOBAL VARIABLES
const userKey = process.env.user_key;
const client = igdb(userKey);

seedDB();

////////////
// ROUTES //
////////////

// Home Route
app.get("/", function(req, res) {
    res.redirect("/games");
});

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
    
  client.games({
    limit: 50,
    filters: {
      'platforms-eq': 130,
      // 'version_parent-not_exists': 1,
      'game-not_exists': 1
    },
    search: query,
    
    // DISABLED WHILE ON LIMITED EXPAND REQUESTS (100/MONTH)
    // expand: [
    //   'developers',
    //   'publishers'
    // ]
    
  }, [
    'id',
    'name',
    'url',
    'release_dates',
    'cover',
    'developers'
  ]).then(response => {
    // res.send(response.body); // response.body contains the parsed JSON response to this query
    res.render('search', {data: response.body, query: query});
  }).catch(error => {
      throw error;
  });
});

// CREATE - Add selected game to database.
app.post("/games", function(req, res){
    var name = req.body.name;
    var link = req.body.gbLink;
    var release = req.body.release;
    var icon = req.body.icon;
    var publisher = req.body.publisher;
    var developer = req.body.developer;
    var newGame = {
        name: name,
        link: link,
        release: release,
        icon: icon,
        publisher: publisher,
        developer: developer
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
