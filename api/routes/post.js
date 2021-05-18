const express = require('express');
const router = express.Router();
const controller = require('../controllers/post');

router.post('/post', controller.addPost);
router.get('/allposts', controller.getPosts);

module.exports = router;

