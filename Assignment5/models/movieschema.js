var mongoose = require("mongoose");

var MovieDetailsSchema = mongoose.Schema({
  Title: String,
  Year: String,
  Rated: String,
  Released: String,
  Runtime: String,
  Genre: String,
  Director: String,
  Writer: String,
  Actors: String,
  Plot: String,
  Language: String,
  Country: String,
  Awards: String,
  Poster: String,
  Metascore: String,
  imdbRating: String,
  imdbVotes: String,
  imdbID: String,
  Type: String,
  Response: String,
});

module.exports = mongoose.model("movies", MovieDetailsSchema);

//  Sample Movie data
// {"Title":"Superman",
//"Year":"1978",
//"Rated":"PG",
//"Released":"15 Dec 1978",
//"Runtime":"143 min",
//"Genre":"Action, Adventure, Drama",
//"Director":"Richard Donner",
//"Writer":"Jerry Siegel (creator: Superman), Joe Shuster (creator: Superman), Mario Puzo (story), Mario Puzo (screenplay), David Newman (screenplay), Leslie Newman (screenplay), Robert Benton (screenplay)",
//"Actors":"Marlon Brando, Gene Hackman, Christopher Reeve, Ned Beatty",
//"Plot":"An alien orphan is sent from his dying planet to Earth, where he grows up to become his adoptive home's first and greatest superhero.",
//"Language":"English",
//"Country":"USA, UK",
//"Awards":"Nominated for 3 Oscars. Another 15 wins & 17 nominations.",
//"Poster":"http://ia.media-imdb.com/images/M/MV5BMTI1MjA5MzM0OF5BMl5BanBnXkFtZTYwNTc0MTQ5._V1_SX300.jpg",
//"Metascore":"86",
//"imdbRating":"7.3",
//"imdbVotes":"124,455",
//"imdbID":"tt0078346",
//"Type":"movie",
//"Response":"True"}
