const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postsSchema = new Schema({
  text: {
    type: String,
    required: false
  },

});

module.exports = mongoose.model('posts', postsSchema)