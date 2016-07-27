var mongoose = require("mongoose");

var ArchievedMailSchema = mongoose.Schema({
  id: String,
  from: String,
  to: String,
  subject: String,
  body: String,
});

module.exports = mongoose.model("amails", ArchievedMailSchema );
