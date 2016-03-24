var mongoose = require('mongoose');

var movieSchema = new mongoose.Schema({
  movTitle: {
    type: String,
  },
  movGenre: {
    type: String,
  },
  movDescription: {
    type: String,
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  }
});

var Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
