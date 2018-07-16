var mongoose  = require("mongoose"),
    Game  = require("./models/game");

var data = [
  {
  name: "Sushi Striker: The Way of Sushido",
  link: "https://www.igdb.com/games/sushi-striker-the-way-of-sushido",
  release: "1528416000000",
  icon: "//images.igdb.com/igdb/image/upload/t_thumb/sug0d4uw9suvcfrzccwe.jpg",
  },
  {
  name: "Mario Kart 8 Deluxe",
  link: "https://www.igdb.com/games/mario-kart-8-deluxe",
  release: "1493337600000",
  icon: "//images.igdb.com/igdb/image/upload/t_thumb/ofpojlma3eib4bozxu4e.jpg",
  },
  {
  name: "Octopath Traveler",
  link: "https://www.igdb.com/games/octopath-traveler",
  release: "1528416000000",
  icon: "https://images.igdb.com/igdb/image/upload/t_thumb/uzotmisl1zf1jtnemkba.jpg",
  },
  {
  name: "The Legend of Zelda: Breath of the Wild",
  link: "https://www.igdb.com/games/the-legend-of-zelda-breath-of-the-wild",
  release: "1488499200000",
  icon: "//images.igdb.com/igdb/image/upload/t_thumb/mievpzb9rbzzenmznvnr.jpg",
  },
  {
  name: "Disgaea 5 Complete",
  link: "https://www.igdb.com/games/disgaea-5-complete",
  release: "1488499200000",
  icon: "https://images.igdb.com/igdb/image/upload/t_thumb/eu8opu7jjsqlavfqs8g2.jpg",
  },
  {
  name: "Stardew Valley",
  link: "https://www.igdb.com/games/stardew-valley",
  release: "1488499200000",
  icon: "https://images.igdb.com/igdb/image/upload/t_thumb/xrpmydnu9rpxvxfjkiu7.jpg",
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