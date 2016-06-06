/*
  Name of movie is extracted from mogomovies.com website.
  This script uses omdb api to query for imdb ratings.
  The IMDb rating is appended to every movie title on the page.
*/


$('.titleh3').each(function() { // selecting all elements with titleh3 class and performing operation on each of them.
  var currentElement = $(this);
  var movieName = currentElement.text().trim().split(' ').join('+'); // extracting movie name and replacing spaces with '+'
  var url = "http://www.omdbapi.com/?t=";
  var query = url + movieName + "&r=json";
  
  // Making the request to omdb api.
  $.getJSON(query, function(data) {
    currentElement.append('<div> IMDb : '+data.imdbRating+'</div>'); // Appending IMDb rating to movie name.
  });
});
