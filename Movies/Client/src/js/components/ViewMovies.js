var React = require('react');
var ReactDOM = require('react-dom');
var UpdateModal = require('./UpdateModal');

var ViewMovies = React.createClass({
  getInitialState:function()
   {
     return {showModal : false};
   },
   handleShowModal: function(){
     console.log("show");
     this.setState({showModal : true})
   },
   handleHideModal : function(){
     console.log("hide false");
     this.setState({showModal : false})
   },
  RequestDelete :function(e){
    e.preventDefault();
    $.ajax({
      url: "http://localhost:8080/delete/"+this.props.allData.imdbID,
      type:'DELETE',
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
      <div className="viewMovies">
          <div className="row">
      				<div className="col-md-12 ">
                  <h3 className="text-center">Title : {this.props.allData.Title}     Year : {this.props.allData.Year} </h3>
                  <img alt="Movie Poster" src={this.props.allData.Poster}/>
                  <br/>
                  <button type="submit" className="btn btn-danger" onClick={this.RequestDelete} id="DELETE">Delete</button>

                  <a href="#myModal" onMouseDown={this.handleShowModal} role="button" className="btn btn-warning" data-toggle="modal">Update</a>
                   {this.state.showModal?<UpdateModal handleHideModal={this.handleHideModal} movie1={this.props.allData} />:null}

      			  </div>
        </div>
    </div>
    );
  }
});

module.exports = ViewMovies;
