var React = require('react');
var {Link} =require('react-router');

var Footer = React.createClass({
  render: function() {
    return (
      <div className="footer">
              <footer>
        	<div className="container">
        		<div className="row">
        			<div className="col-sm-4">
              <h6>About Us</h6>
              <p>We are the new MERN Hybrid batch who are designing a SPA for Movies Library</p>
        			<h6>Copyright &copy; 2016 Sneh Shradha</h6>
        			</div>

        			<div className="col-sm-2">
        				<h6>Navigation</h6>
        				<ul className="unstyled">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contactUs">Contact Us</Link></li>
        				</ul>
        			</div>

        			<div className="col-sm-2">
        				<h6>Follow Us</h6>
        				<ul className="unstyled">
        					<li><a href="#">Twitter</a></li>
        					<li><a href="#">Facebook</a></li>
        					<li><a href="#">Google Plus</a></li>
        				</ul>
        			</div>

        		</div>
        	</div>
        </footer>
      </div>
);
}
});

module.exports = Footer;
