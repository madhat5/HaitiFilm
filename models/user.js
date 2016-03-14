var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
    unique: true
  },
  password_hash: {
    type: String,
    required: true
  },
  favorites: {
    type: Array
  },
  create_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  }
});

var User = mongoose.model('User', userSchema);

module.exports = User;
