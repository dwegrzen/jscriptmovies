favoritemovies = []

favoritemovies = [{title: "Fast and the Furious", actors: ["Paul Walker", "Vin Diesel"], director: "Rob Cohen", genre: "Action", year: 2001, rating: [6.7, 58]},{title: "Mad Max: Fury Road", actors: ["Tom Hardy","Charlize Theron"], director: "George Miller", genre: "Action", year: 2015, rating: [8.1, 90]},{title: "District 9", year: 2009, genre: "Sci-Fi", actors: ["Jason Cope","Sharlto Copley"], director: "Neill Blomkamp", rating: [8.0, 81]},{title: "Forrest Gump", year: 1994, director: "Robert Zemeckis", actors: ["Tom Hanks", "Robin Wright", "Gary Sinise"], rating: [8.8, 82], genre: "Drama"},{title: "As Good as it Gets", genre: "Romantic Comedy", director: "James L. Brooks", year: "1997", rating: [7.7, 66], actors: ["Jack Nicholson","Helen Hunt"]}]


function Movie(movie){

  this.title = movie.title
  this.actors = movie.actors
  this.director = movie.director
  this.genre = movie.genre
  this.year = movie.year
  this.starRating = movie.rating[0]
  this.metascore = movie.rating[1]

}

favoritemovieobject = favoritemovies.map(function(movie){
  return new Movie(movie)
})

console.log(favoritemovieobject)

sortedname = favoritemovies.map(function(movie){
  return new Movie(movie)
}).sort(function (a, b) {
 return b.title < a.title
})

console.log(sortedname)

jsonobject = JSON.stringify(sortedname)

console.log(jsonobject)

sortedstarRating = favoritemovies.map(function(movie){
  return new Movie(movie)
}).sort(function (a, b) {
 return b.starRating < a.starRating
})

console.log(sortedstarRating)

worstmovies = [{title: "Movie 43", actors: ["Emma Stone", "Greg Kinnear", "Hugh Jackman"], director: "Elizabeth Banks", genre: "Comedy", year: 2013, rating: [4.3, 18]},{title: "Speed", actors: ["Keanu Reeves","Sandra Bullock"], director: "Jan de Bont", genre: "Action", year: 1994, rating: [7.2,78]},{title: "Cabin Fever", year: 2002, genre: "Horror", actors: ["Jordan Ladd","Rider Strong"], director: "Eli Roth", rating: [5.6,56]},{title: "Armageddon", year: 1998, director: "Michael Bay", actors: ["Bruce Willis", "Ben Affleck", "Billy Bob Thornton"], rating: [6.6, 42], genre: "Adventure"},{title: "Super Mario Bros", genre: "Adventure", director: "Annabel Jankel", year: "1993",rating: [4.0,4], actors: ["Bob Hoskins","John Lequizamo","Dennis Hopper"]}]

combined = favoritemovies.concat(worstmovies)

combinedmovieobject = combined.map(function(movie){
  return new Movie(movie)
})

console.log(combinedmovieobject)

combinedRating = combinedmovieobject.sort(function (a, b) {
 return b.starRating > a.starRating
})


combinedRating.forEach(function(movie){
  document.getElementById('movielist').innerHTML +=
    "<tr><td>" + movie.title + "</td><td>" + movie.year + "</td><td>" + movie.director + "</td><td>" + movie.actors + "</td><td>" + movie.genre + "</td><td>" + movie.starRating + "</td><td>" + movie.metascore + "</td>"
})


// JSON api calls, only logging distric9 to console

district9 = $.getJSON('http://www.omdbapi.com/?i=tt1136608&plot=short&r=json', function(data){
    console.log(data);
})

fnf = $.getJSON('http://www.omdbapi.com/?i=tt0232500&plot=short&r=json')

agaig = $.getJSON('http://www.omdbapi.com/?i=tt0119822&plot=short&r=json')

fgump = $.getJSON('http://www.omdbapi.com/?i=tt0109830&plot=short&r=json')

furyroad = $.getJSON('http://www.omdbapi.com/?i=tt1392190&plot=short&r=json')


// ajax api calls, only logging distric9 to console

d9ajax = $.ajax('http://www.omdbapi.com/?i=tt1136608&plot=short&r=json')
console.log(d9ajax)

fnfajax = $.ajax('http://www.omdbapi.com/?i=tt0232500&plot=short&r=json')

agaigajax = $.ajax('http://www.omdbapi.com/?i=tt0119822&plot=short&r=json')

fgumpajax = $.ajax('http://www.omdbapi.com/?i=tt0109830&plot=short&r=json')

furyroadajax = $.ajax('http://www.omdbapi.com/?i=tt1392190&plot=short&r=json')



// GitHub api call using JSON and my userid

mygithub = $.getJSON('https://api.github.com/users/dwegrzen', function(data){
    console.log(data);
});


// Some movies the greatest movie director of our time has to offer on netflixroulette

netflixroulette = $.getJSON('http://netflixroulette.net/api/api.php?director=Michael%20Bay', function(data){
    console.log(data);
});

// could not get below to render
// document.getElementById('jsonforeach').innerHTML =
//   "<div class='col-sm-4'><h5>" + fnf.responseJSON.Title + "</h5><h5>" + fnf.responseJSON.Plot + "</h5><img src='" + fnf.responseJSON.Poster + "'>"
