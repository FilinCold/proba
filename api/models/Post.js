const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postsSchema = new Schema({

  title: {
    type: String,
    required: false
  },
  hashtag: {
    type: String,
    required: false
  },
  description: {
    type: String,
    required: false
  },
  text: {
    type: String,
    required: false
  },
});

module.exports = mongoose.model('posts', postsSchema)