

$('.titleh3').each(function() {
  var currentElement = $(this);
  var movieName = $(this).text().trim().split(' ').join('+');
  $.getJSON("http://www.omdbapi.com/?t="+movieName+"&r=json", function(data) {
    currentElement.append('<div> IMDb : '+data.imdbRating+'</div>')
  });
});
