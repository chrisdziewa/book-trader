const Mongoose = require('mongoose');

const Book = new Mongoose.Schema({
  title: String,
  currentOwner: Objectid
});

module.exports = Book;
