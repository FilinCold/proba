const Profile = require('../models/Profile');
const errorHandler = require('../utils/errorHandler');

module.exports.editProfile = async function (req, res) {
  const profile = new Profile({
    image: req.file ? req.file.path : '',
    aboutMe: req.body.aboutMe,
  })

  try {
    await profile.save();
    res.status(201).json(profile);
  } catch (e) {
    errorHandler(res, e);
  }
}
