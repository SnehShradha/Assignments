var React = require('react');

var SearchBar = require('./SearchBar');
var MovieList = require('./MovieList');

var MovieBox = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  handleReq : function(movieSearched){
    $.ajax({
      url: "http://www.omdbapi.com/?s="+movieSearched.Title,
      dataType: 'json',
      cache: false,
      success: function(data) {
      
        if(data.Response == "True")
        this.setState({data: data.Search});
        else
            alert("Movie not Found");
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  render: function() {
    return (
      <div className="movieBox" id = "movieBox">

      <div className="row">
    		<div className="col-md-12" id="mBoxCol">
            <SearchBar handleSubmitTitle={this.handleReq}/>
            <hr/>
            <MovieList mdata={this.state.data}/>
          </div>
         </div>
      </div>
    );
  }
});

module.exports= MovieBox;
