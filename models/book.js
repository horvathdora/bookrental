var Schema = require('mongoose').Schema;
var db = require('../config/db');

var Book = db.model('Book', {
  title: String,
  author: String,
  year: Number,
  description: String,
  owner: String,
  rentedBy: String,
  rentedDate: String
});

module.exports = Book; 