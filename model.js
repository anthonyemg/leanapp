var db = require('./db');
var mongoose = require('mongoose');

var recentSearchesSchema = new mongoose.Schema({
  foodName: String,
  protein: Number,
  calories: Number,
  ratio: Number
});


module.exports = mongoose.model('food', recentSearchesSchema);
