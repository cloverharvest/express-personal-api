// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');

var familyprofile = {description: "About us."};

db.Familyprofile.create(new_familyprofile, function(err, familyprofile){
  if (err){
    return console.log("Error:", err);
  }

  console.log("Created family profile", familyprofile._id);
  process.exit(); // we're all done! Exit the program.
});
