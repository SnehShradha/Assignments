var React = require('react');

var About = React.createClass({
  render: function() {
    return (
      <div className="about" id="about">
      <h1 className="text-center"><u><strong>About Us</strong></u></h1>
      <p>We are getting trained in MERN Stack</p>
      </div>
    );
  }
});

module.exports = About;
