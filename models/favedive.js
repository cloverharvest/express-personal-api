var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var FaveDiveSchema = new Schema({
     name: String,
     description: String,
     city: String,
     stateprovince: String,
     latitude: Number,
     longitude: Number
});

var FaveDive = mongoose.model('FaveDive', FaveDiveSchema);
module.exports = FaveDive;
