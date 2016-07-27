var mongoose = require("mongoose");

var MovieDetailsSchema = mongoose.Schema({
  Title: String,
  Year: String,
  Poster: String,
  imdbID: String,
  Type: String,
});

module.exports = mongoose.model("movies", MovieDetailsSchema);

// Poster: "http://ia.media-imdb.com/images/M/MV5BMjExNzM0NDM0N15BMl5BanBnXkFtZTcwMzkxOTUwNw@@._V1_SX300.jpg
// "Title: "Titanic"
// Type: "movie"
// Year: "1997"
// imdbID: "tt0120338"
