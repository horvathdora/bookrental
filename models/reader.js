var Schema = require('mongoose').Schema;
var db = require('../config/db');

var Reader = db.model('Reader', {
  name: String,
  books: Number
});

module.exports = Reader; 