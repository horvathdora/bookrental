var Schema = require('mongoose').Schema;
var db = require('../config/db');


var User = db.model('user', {
  lname: String,
  fname: String,
  email: String,
  password: String,
  books: Number
});

module.exports = User; 