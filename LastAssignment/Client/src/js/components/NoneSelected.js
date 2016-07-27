var React = require('react');
var NoneSelected = React.createClass({
  render: function() {
    return (
      <div className="none-selected alert alert-warning" role="alert">
        <span>No {this.props.text} selected.</span>
      </div>
    );
  }
});
module.exports= NoneSelected;
