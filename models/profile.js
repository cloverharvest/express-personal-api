var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var ProfileSchema = new Schema({
     names: Array,
     location: String,
     professions: Array,
     religion: String,
     image: String,
});

var Profile = mongoose.model('Profile', ProfileSchema);
module.exports = Profile;
