const express = require('express');
const router = express.Router();
const controller = require('../controllers/profile');
const upload = require('../middleware/upload');

router.post('/:id', upload.single('image'), controller.editProfile);

module.exports = router;

