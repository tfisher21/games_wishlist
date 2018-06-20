var express = require("express"),
    app     = express(),
    request = require("request");

app.set('view engine', 'ejs');

app.get("/", function(req, res){
  res.render("landing");
});

app.get("/search", function(req, res){
    var query = req.query.query;
    var url = "https://www.giantbomb.com/api/releases/?api_key=3a2371ccbc38bdf338af59ffb0ee43ecc950dddb&format=JSON&filter=region:1,platform:157,name:" + query;
    
    request(url, function(error, response, body){
        if (!error && response.statusCode == 200) {
            var data = JSON.parse(body);
            res.render("results", {data:data});
        }
    });
});

//////////////////////////////
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The Server is Online!");
});