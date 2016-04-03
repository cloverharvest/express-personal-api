// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');

// var familyprofile = {description: "About us."};
//
// db.Familyprofile.create(new_familyprofile, function(err, familyprofile){
//   if (err){
//     return console.log("Error:", err);
//   }
//
//   console.log("Created family profile", familyprofile._id);
//   process.exit(); // we're all done! Exit the program.
// });


var profile = {
     names: "Joseph, Anna, and Asher",
     location: "Benicia",
     professions: "Sales Professional, Web Development Student, Joy Giver",
     religiousview: "Roman Catholic",
     image: "http://i.imgur.com/1GwUqdn.jpg",
};

db.Profile.create(profile, function(err, profile) {
  if (err) {
    return console.log("Error:", err);
  }

  console.log("Created profile", profile._id);
  process.exit();
});
