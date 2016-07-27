var React = require('react');

var UpdateModal = React.createClass ({
 getInitialState: function(){
   return({
     Year : this.props.movie1.Year
   });
 },
 handleYearChange : function(e){
   this.setState({Year: e.target.value})
 },
 RequestUpdate :function(e){
   e.preventDefault();
   $.ajax({
     url: "http://localhost:8080/modify/"+this.props.movie1.imdbID+"/"+this.state.Year,
     type:'PUT',
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
 render: function()
 {
 return(
   <div className="modal fade" id="myModal">
     <div className="modal-dialog">
       <div className="modal-content">

         <div className="modal-header">
           <button type="button" className="close" onClick={this.props.handleHideModal} data-dismiss="modal">&times;</button>
           <h4 className="modal-title">Update Year</h4>
         </div>

         <div className="modal-body">
         <form className="form-horizontal">
              <div className="form-group">
              <label className="col-lg-2 control-label" for="inputYear">Year</label>
               <div className="col-lg-10">
                   <input type="text" placeholder="Year" defaultValue={this.props.movie1.Year} onChange={this.handleYearChange} className="form-control" id="inputYear"/>
                </div>
             </div>
           </form>
         </div>

         <div className="modal-footer">
           <button type="button" onClick={this.props.handleHideModal} className="btn btn-default"  data-dismiss="modal">Close</button>
           <button type="button" onClick={this.RequestUpdate} className="btn btn-primary">Save change</button>
         </div>

       </div>
     </div>
   </div>
 );}
});

module.exports = UpdateModal;
