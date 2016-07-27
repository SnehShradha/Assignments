var React = require('react');
var {render} = require('react-dom');
var {browserHistory, Route, Router, IndexRoute} = require('react-router');

var Home = require('./components/Home');
var About = require('./components/About');
var ContactUs = require('./components/ContactUs');
var NavBar = require('./components/NavBar');
var MovieBox = require('./components/MovieBox');
var ViewMovieBox = require('./components/ViewMovieBox');
var Footer = require('./components/Footer');
var Login = require('./components/Login');

var MainComponent = React.createClass({
  render: function() {
    return (
      <div>
      <NavBar />
      <br/><br/><br/>
      {this.props.children}
      <br/><br/>
      <Footer />
      </div>
    );
  }
});

render(
  <Router history={browserHistory}>
    <Route path="/" component={MainComponent}>
      <IndexRoute component={Login}/>
      <Route path="home" component={Home} />
      <Route path="about" component={About} />
      <Route path="contactUs" component={ContactUs}/>
      <Route path="add" component={MovieBox} />
      <Route path="view" component={ViewMovieBox} />
      </Route>
  </Router>
,document.getElementById('app'));
