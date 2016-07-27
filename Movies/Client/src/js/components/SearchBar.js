var React = require('react');

var SearchBar = React.createClass({
  getInitialState: function() {
    return {Title: ''};
  },
  handleTitleChange :function(e){
    this.setState({Title : e.target.value});
  },
  submitTitle :function(e){
    e.preventDefault();
    this.props.handleSubmitTitle({Title : this.state.Title});
  },
  render: function() {
    return (
      <div className="searchBar" id="searchBar">

      <form className="navbar-form" onSubmit = {this.submitTitle}>
        <input type="text" name="Title" value = {this.state.Title} onChange={this.handleTitleChange} className="form-control" placeholder="Type Movie name here..." id="searchInput"/>
        <button type="submit" className="btn btn-info">Search</button>
      </form>

      </div>
    );
  }
});

module.exports = SearchBar;
