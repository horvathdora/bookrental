var Schema = require('mongoose').Schema;
var db = require('../config/db');

var Book = db.model('Book', {
  title: String,
  author: String,
  year: Number,
  description: String
});

module.exports = Book; 