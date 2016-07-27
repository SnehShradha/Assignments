var React = require('react');

var ViewMovieList = require('./ViewMovieList');

var ViewMovieBox = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  autoRefreshList : function (){
    $.ajax({
      url: "http://localhost:8080/allmovies",
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
        console.log(data);
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  componentDidMount: function() {
        this.autoRefreshList();
        setInterval(this.autoRefreshList,1000);
  },
  render: function() {
    return (
      <div className="viewMovieBox">
      <div className="row">
    		<div className="col-md-12">
            <ViewMovieList mdata={this.state.data}/>
          </div>
         </div>
      </div>
    );
  }
});

module.exports= ViewMovieBox;
