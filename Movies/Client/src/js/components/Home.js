var React = require('react');

var Home = React.createClass({
  render: function() {
    return (
      <div className="home">
          <div className="jumbotron">
              <h1 className="text-center">Welcome to Movies Library</h1>
              <br/><br/>
              <p><u>Say any movie any language</u></p>
              <p><u>Just make your personalised collection in few clicks</u></p>
          </div>
      </div>
    );
  }
});

module.exports = Home;
