var mongoose = require("mongoose");

var StudentDetailsSchema = mongoose.Schema({
  name: String,
  age: String,
  location: { city: String, country: String }
});

module.exports = mongoose.model("users", StudentDetailsSchema);
