var React=require ('react');
var ViewFullMail = require('./ViewFullMail');

var Email = React.createClass({
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
       RequestADD :function(e){
         e.preventDefault();
         $.ajax({
           url: "http://localhost:8080/add",
           type:'POST',
           data: this.props,
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
      <div className="email">
        <dl className="meta dl-horizontal">
          <dt>From</dt>
          <dd>{this.props.from}</dd>

          <dt>To</dt>
          <dd>{this.props.to}</dd>

          <dt>Snippet</dt>
          <dd>{this.props.subject}</dd>
        </dl>
        <br/>
        <a href="#myModal" onMouseDown={this.handleShowModal} role="button" className="btn btn-warning" data-toggle="modal">View Full Mail</a>
        <ViewFullMail handleHideModal={this.handleHideModal} mail1={this.props} />
        <button type="button" onClick={this.RequestADD} className="btn btn-primary" id ="ADD">Add to Archieve</button>
      </div>
    );
  }
});

module.exports= Email;
