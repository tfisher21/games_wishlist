var mongoose  = require("mongoose"),
    Wishlist  = require("./models/wishlist");

var data = [
  {
  name: "Sushi Striker: The Way of Sushido",
  gbLink: "https://www.giantbomb.com/sushi-striker-the-way-of-sushido/3030-59953/",
  deck: "A sushi-based puzzle action game for Nintendo Switch and 3DS by Nintendo EPD and indies zero. Create combos by stacking color-coded sushi plates and throwing them at the opponent."
  },
  {
  name: "Mario Kart 8",
  gbLink: "https://www.giantbomb.com/mario-kart-8/3030-42929/",
  deck: "Mario Kart returns and makes its HD-debut with gravity-defying hover vehicles, a new spin on the traditional track designs, ATVs, the return of classic Last Man Standing-Battle Mode, custom online tournaments and Mario Kart TV, which allows for sharing of highlight videos online."
  },
  {
  name: "The Legend of Zelda: Breath of the Wild",
  gbLink: "https://www.giantbomb.com/the-legend-of-zelda-breath-of-the-wild/3030-41355/",
  deck: "The first HD installment of the Zelda series developed for the Wii U and Nintendo Switch that returns to the open-world design of the original NES title, with a focus on free exploration of a large scale environment as well as dangerous enemies."
  }
];

function seedDB() {
  // Empty wishlist database
  Wishlist.remove({}, function(err){
    if (err) {
      console.log(err);
    }
    
    console.log("Wishlist Emptied!");
    
    // Add games from data array
    data.forEach(function(seed){
      Wishlist.create(seed, function(err, game){
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