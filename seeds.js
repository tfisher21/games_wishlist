var mongoose  = require("mongoose"),
    Game  = require("./models/game");

var data = [
  {
  name: "Sushi Striker: The Way of Sushido",
  link: "https://www.igdb.com/games/sushi-striker-the-way-of-sushido",
  release: 1528416000000,
  icon: "//images.igdb.com/igdb/image/upload/t_thumb/sug0d4uw9suvcfrzccwe.jpg",
  developer: "Nintendo EPD",
  publisher: "Nintendo"
  },
  {
  name: "Mario Kart 8 Deluxe",
  link: "https://www.igdb.com/games/mario-kart-8-deluxe",
  release: "1493337600000",
  icon: "//images.igdb.com/igdb/image/upload/t_thumb/ofpojlma3eib4bozxu4e.jpg",
  developer: "Nintendo EPD",
  publisher: "Nintendo"
  },
  {
  name: "The Legend of Zelda: Breath of the Wild",
  link: "https://www.igdb.com/games/the-legend-of-zelda-breath-of-the-wild",
  release: "1488499200000",
  icon: "//images.igdb.com/igdb/image/upload/t_thumb/mievpzb9rbzzenmznvnr.jpg",
  developer: "Nintendo EPD",
  publisher: "Nintendo"
  }
];

function seedDB() {
  // Empty game database
  Game.remove({}, function(err){
    if (err) {
      console.log(err);
    }
    
    console.log("Game Database Emptied!");
    
    // Add games from data array
    data.forEach(function(seed){
      Game.create(seed, function(err, game){
        if (err) {
          console.log(err);
        } else {
          game.save();
          console.log("Game Added!");
        }
      });
    });
  });  
}

module.exports = seedDB;