var React = require('react');

var Movies = require("./Movies");


var MovieList = React.createClass({
  render: function() {
    console.log(this.props.mdata);
    var Allmovie = this.props.mdata.map(function(movies) {
      return (
        <Movies allData={movies} key={movies.imdbID}/>
      );
    });
    return (
      <div className="movieList">
          {Allmovie}
      </div>
    );
  }
});

module.exports = MovieList;
