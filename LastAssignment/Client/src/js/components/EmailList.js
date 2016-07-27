var React=require ('react');
var EmailListItem = require('./EmailListItem');

var EmailList = React.createClass({
  render: function() {
    var email_list = this.props.emails.map(function(mail) {
      return (
        <EmailListItem key={mail.id}
                       from={mail.from}
                       to={mail.to}
                       subject={mail.subject}
                       on_click={this.props.onSelectEmail.bind(null, mail.id)} />
      );
    }.bind(this));

    return (
      <table className="email-list table table-striped table-condensed">
        <thead>
          <tr>
            <th>From</th>
            <th>To</th>
          </tr>
        </thead>
        <tbody>
          {email_list}
        </tbody>
      </table>
    );
  }
});

module.exports= EmailList;
