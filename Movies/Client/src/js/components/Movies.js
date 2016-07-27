var React = require('react');
var ReactDOM = require('react-dom');

var Movies = React.createClass({
  RequestADD :function(e){
    e.preventDefault();
    $.ajax({
      url: "http://localhost:8080/add",
      type:'POST',
      data: this.props.allData,
      dataType: 'text',
      cache: false,
      success: function(data) {
        alert(data);
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  render: function() {
    return (
      <div className="movies" id = "movie">

      <div className="row">

				<div className="col-md-12 "  id = "Poster">
        <h3 className="text-center">Title : {this.props.allData.Title} Year : {this.props.allData.Year} </h3>
        <img alt="Movie Poster" src={this.props.allData.Poster}/>
        <br/>
        <button type="submit" className="btn btn-info" onClick={this.RequestADD} id="ADD">Add to Library</button>
				</div>

      </div>

    </div>
    );
  }
});

module.exports = Movies;
