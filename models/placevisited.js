var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var PlaceVisitedSchema = new Schema({
     name: String,
     description: String,
     city: String,
     stateprovince: String,
     latitude: Number,
     longitude: Number
});

var PlaceVisited = mongoose.model('PlaceVisited', PlaceVisitedSchema);
module.exports = PlaceVisited;
