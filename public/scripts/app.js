console.log("Sanity Check: JS is working!");


$(document).ready(function(){
  //base API ROUTES
  var baseUrl = '/api/profile';

  // array to hold profile data from API
  var allProfile = [];

  //element to display the profile div
  $profile = $('#profiletarget');


  //compile handlebars template
  var source = $('#profile-template').html();
  template = Handlebars.compile(source);

  //helper function to render the profile to views
  //note: we empty and re-render the collection each time
  //the profile data changes

  function render() {
    //empty exisitng profile from view
    $profile.empty();

    //pass 'allProfile' into the template function
    var profileHtml = template({ profile: allProfile });

    $profile.append(profileHtml);
  }

// GET profile on page load
    $.ajax({
      method: "GET",
      url: baseUrl,
      success: function onSuccess(json) {
        console.log(json);

        //set 'allProfile' to profile data (json.data) from api

        allProfile = json;

        //render all profile to view
        render();
      },
      error: function handleError(evt) {
        console.log('uh oh');
        $profile.text('Failed to load books, is the server working?');
      }
    });
 });
