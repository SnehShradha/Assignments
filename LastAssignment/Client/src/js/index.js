var React = require('react');
var {render} = require('react-dom');
var {browserHistory, Route, Router, IndexRoute} = require('react-router');

var Mailbox = require('./components/Mailbox');
var MailboxList = require('./components/MailboxList');
var NoneSelected = require('./components/NoneSelected');
var mails = require('./components/mails.json');

var App = React.createClass({
  getInitialState: function(){
    return { mailbox_id: null,data: [],maildata:[] };
  },
  getAllMessages: function()
  {
    this.setState({maildata:mails});
  },
  handleSelectMailbox: function(id) {
    this.setState({ mailbox_id: id });
  },
  HandleArchieve: function() {
    $.ajax({
      url: "http://localhost:8080/allmails",
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  componentDidMount: function() {
        this.getAllMessages();
        this.HandleArchieve();
        setInterval(this.HandleArchieve,1000);
  },
  render: function() {
    var mailbox_id = this.state.mailbox_id;
    if (mailbox_id) {
      var mailbox = this.state.maildata.filter(function(mailbox) {
        return mailbox.id == mailbox_id;
      })[0];
        if(mailbox_id==3)
            selected_mailbox = <Mailbox key={mailbox.id} emails={this.state.data} />;
        else
            selected_mailbox = <Mailbox key={mailbox.id} emails={mailbox.emails} />;
    } else {
      selected_mailbox = <NoneSelected text="mailbox" />;
    }

    return (
      <div className="app row">
        <MailboxList mailboxes={this.state.maildata}
                     onSelectMailbox={this.handleSelectMailbox} />
        <div className="mailbox col-md-10">
          <div className="panel panel-default">
            <div className="panel-body">
              {selected_mailbox}
            </div>
          </div>
        </div>
      </div>
    );
  }
});
render(
  <Router history={browserHistory}>
  <Route path="/" component={App}></Route>
  </Router>
  ,document.getElementById('app'));
