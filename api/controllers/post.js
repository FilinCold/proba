const Post = require('../models/Post');
const errorHandler = require('../utils/errorHandler');

module.exports.addPost = async function (req, res) {

  const post = new Post({
    text: req.body.text,
  })
  try {
    await post.save();
    res.status(201).json(post);
  } catch (e) {
    errorHandler(res, e);
  }
}
module.exports.getPosts = async function (req, res) {
  try {
    const posts = await Post.find();
    res.status(201).json(posts);
  } catch (e) {
    errorHandler(res, e);
  }
}
