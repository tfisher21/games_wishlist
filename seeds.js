var mongoose  = require("mongoose"),
    Game  = require("./models/game");

var data = [
  {
  name: "Sushi Striker: The Way of Sushido",
  gbLink: "https://www.giantbomb.com/sushi-striker-the-way-of-sushido/3030-59953/",
  release: "2018-06-08 00:00:00",
  icon: "https://www.giantbomb.com/api/image/square_avatar/2946301-3ds_sushistrikerthewayofsushido_e32017_illustration_03.jpg"
  },
  {
  name: "Mario Kart 8",
  gbLink: "https://www.giantbomb.com/mario-kart-8/3030-42929/",
  release: "2014-05-29 00:00:00",
  icon: "https://www.giantbomb.com/api/image/square_avatar/2600974-12510938343_01c49da2be_o.jpg"
  },
  {
  name: "The Legend of Zelda: Breath of the Wild",
  gbLink: "https://www.giantbomb.com/the-legend-of-zelda-breath-of-the-wild/3030-41355/",
  release: "2017-03-03 00:00:00",
  icon: "https://www.giantbomb.com/api/image/square_avatar/2920687-the%20legend%20of%20zelda%20-%20breath%20of%20the%20wild%20v7.jpg"
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