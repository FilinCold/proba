const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new Schema({
  image: {
    type: String,
    default: ''
  },
  aboutMe: {
    type: String,
    required: true
  },
});

module.exports = mongoose.model('profile', profileSchema)