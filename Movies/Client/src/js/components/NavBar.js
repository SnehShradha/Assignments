var React = require('react');
var {Link} =require('react-router');

var NavBar = React.createClass({
  render: function() {
    return (
      <div>
      <nav className="navbar navbar-default">
  <div className="container-fluid">

    <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <a className="navbar-brand" href="#">SS</a>
    </div>

    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav">
        <li><Link to="/">Login</Link></li>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/add">Add to Library</Link></li>
        <li><Link to="/view">View Movies Library</Link></li>
      </ul>
      <ul className="nav navbar-nav navbar-right">
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contactUs">Contact Us</Link></li>
      </ul>
    </div>

  </div>
</nav>
 </div>
    );
  }
});

module.exports = NavBar;
