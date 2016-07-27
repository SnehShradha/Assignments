var React = require('react');

var ViewMovies = require("./ViewMovies");


var ViewMovieList = React.createClass({
  render: function() {
    console.log(this.props.mdata);
    var Allmovie = this.props.mdata.map(function(movies) {
      return (
        <ViewMovies allData={movies} key={movies.imdbID}/>
      );
    });
    return (
      <div className="viewMovieList">
      <h1 className="text-center"><u><strong>Movies collection</strong></u></h1>
          {Allmovie}
          <br/>
      </div>
    );
  }
});

module.exports = ViewMovieList;
