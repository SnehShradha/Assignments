var mongoose = require("mongoose");

var users = mongoose.Schema({
  username: String,
  password: String
});

module.exports = mongoose.model("users", users);
