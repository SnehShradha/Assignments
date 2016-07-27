var React = require('react');

var ViewFullMail = React.createClass ({
  componentDidMount: function(){
    var html = atob(this.props.mail1.body.replace(/-/g, '+').replace(/_/g, '/'));
    this.appendPre(html);
  },
  appendPre: function(message)
  {
 document.getElementById('matter').innerHTML= message;
  },
  render: function()
  {
  return(
    <div className="modal fade" id="myModal">
      <div className="modal-dialog" id="myMDialog">
        <div className="modal-content">

          <div className="modal-header">
            <button type="button" className="close" onClick={this.props.handleHideModal} data-dismiss="modal">&times;</button>
            View Full Mail
          </div>

          <div className="modal-body">
            Matter :
            <div id="matter"></div>
          </div>

          <div className="modal-footer">
            <button type="button" onClick={this.props.handleHideModal} className="btn btn-default"  data-dismiss="modal">Close
              </button>
          </div>

        </div>
      </div>
    </div>

  );}

});

module.exports = ViewFullMail;
