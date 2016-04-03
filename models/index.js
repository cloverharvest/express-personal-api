
var mongoose = require("mongoose");
mongoose.connect( process.env.MONGOLAB_URI ||
                  process.env.MONGOHQ_URL ||
                  "mongodb://localhost/personal-api");

// module.exports.Campsite = require("./campsite.js.example");
module.exports.Profile = require("./profile.js");

module.exports.PlaceVisited = require("./placevisited.js");

module.exports.FaveDive = require("./favedive.js");
