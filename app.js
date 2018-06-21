var express = require("express"),
    app     = express(),
    request = require("request"),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose");

require("dotenv").load();
mongoose.connect("mongodb://localhost/crm");
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');


////////////
// ROUTES //
////////////

// LANDING
app.get("/", function(req, res){
  res.render("landing");
});

// SEARCH RESULTS
app.get("/search", function(req, res){
    var query = req.query.query;
    var url = "https://www.giantbomb.com/api/releases/?api_key=" + process.env.gbapi + "&format=JSON&filter=region:1,platform:157,name:" + query;
    
    request(url, function(error, response, body){
        if (!error && response.statusCode == 200) {
            var data = JSON.parse(body);
            res.render("results", {data:data});
        }
    });
});

// CREATE - Add selected title to wishlist
app.post("/wishlist", function(req, res){
    
});

//////////////////////////////
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The Server is Online!");
});