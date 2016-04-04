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
     professions: "Sales Professional, Web Development Student, and Joy Giver",
     religiousview: "Roman Catholic",
     image: "http://i.imgur.com/1GwUqdn.jpg",
};

db.Profile.create(profile, function(err, profile) {
  if (err) {
    return console.log("Error:", err);
  }
  console.log("Created profile", profile._id);
  console.log("Created", profile.length, "profile");
  process.exit();
});

// var placesvisited = [
//   {
//   name: "Port Costa Main St",
//   description: "This is definitely the type of town where, if someone gets murdered, everyone agrees to keep it a secret and not make a fuss.-Amity Bacon's boyfriend",
//   city: "Port Costa",
//   stateprovince: "CA",
//   latitude: 38.0463097,
//   longitude: -122.1833005
//   },
//   {
//   name: "Downtown Pescadero",
//   description: "A cool small town!! I usually stop here for a break while I'm out riding.- Matthew J.",
//   city: "Pescadero",
//   stateprovince: "CA",
//   latitude: 37.2065,
//   longitude: -122.3649
//   },
//   {
//   name: "Central Park",
//   description: "Wanna finish your Yoloberry? Ample benches and seating area to do so.-Abe M.",
//   city: "Davis",
//   stateprovince: "CA",
//   latitude: 38.5462,
//   longitude: -122.3649
//   }
// ];
//
// db.PlaceVisited.remove({}, function(err, placesvisited){
//   if(err) {
//     console.log('Error occurred in remove', err);
//   } else {
//     console.log('removed all placesvisited');
//
//     // create new records based on the array books_list
//     db.PlaceVisited.create(placesvisited, function(err, placesvisited){
//       if (err) { return console.log('err', err); }
//      
//       console.log("created", placesvisited.length, "placesvisited");
//       process.exit();
//     });
//   }
// });

// db.PlaceVisited.create(placesvisited, function(err, placesvisited) {
//   if (err) {
//     return console.log("Error:", err);
//   }
//
//   console.log("Created placevisited", placesvisited._id);
//   console.log("Created", placesvisited.length, "placevisited");
//   process.exit();
// });
