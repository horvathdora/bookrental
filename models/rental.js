var Schema = require('mongoose').Schema;
var db = require('../config/db');


var Rental = db.model('Rental', {
  _item: {
    type: Schema.Types.ObjectId,
    ref: 'Book'
  },
  _owner: {
    type: Schema.Types.ObjectId,
    ref: 'Reader'
  },
  from: Date
});

module.exports = Rental; 