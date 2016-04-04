// require express and other modules
var express = require('express'),
    app = express();

// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function(req, res, next) {
  //allows other developers to consume the API from another origin
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/************
 * DATABASE *
 ************/

var db = require('./models');

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 */

app.get('/api', function api_index(req, res) {
  // TODO: Document all your api endpoints below
  res.json({
    woops_i_has_forgot_to_document_all_my_endpoints: false,
    message: "Welcome to The Schwab Family API! Here's what you need to know!",
    documentation_url: "#", // CHANGE ME
    base_url: "http://pumpkin-cupcake-47698.herokuapp.com",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/profile", description: "Data About Us"},
      {method: "GET", path: "/api/placesvisited", description: "Get parks, cities and places we have visited"},
      {method: "POST", path: "/api/placesvisited", description: "Add parks, cities and places we have visited"},
      {method: "PUT", path: "/api/placesvisited/:id", description: "Update details in parks, cities and places we have visited"},
      {method: "GET", path: "/api/favedives", description: "Get data on favorite food dives"},
      {method: "POST", path: "/api/favedives", description: "Add to Favorite food dives"},
      {method: "DELETE", path: "/api/favedives/:id", description: "Delete food dive"}
    ]
  });
});


//get all profile
app.get('/api/profile', function(req, res) {
  //res.json({profile: allProfile});
  var profile = req.body;
  //send all the profile as JSON response

  db.Profile.find().populate('profile')
    .exec(function(err, profile) {
      if (err) {
        return console.log(err);
      }
      res.json(profile);
  });
});

// // get all placesvisited
//
// app.get('/api/placesvisited', function(req, res) {
//   //res.json({profile: allProfile});
//   var placesvisited = req.body;
//   //send all the profile as JSON response
//
//   db.Profile.find().populate('placesvisited')
//     .exec(function(err, placesvisited) {
//       if (err) {
//         return console.log(err);
//       }
//       res.json(placesvisited);
//   });
// });


/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
