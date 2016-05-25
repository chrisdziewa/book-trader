const Mongoose = require('mongoose');

const Trade = new Mongoose.Schema({
  title: String,
  fromUser: Objectid,
  toUser: Objectid,
  pending: {
    type: Boolean,
    default: true
  }
});

module.exports = Trade;
