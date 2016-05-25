const Mongoose = require('mongoose');

const User = new Mongoose.Schema({
  profileId: String,
  fullName: String,
  city: String,
  state: String
});

module.exports = User;
