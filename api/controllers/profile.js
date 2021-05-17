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
  // try {
  //   const edit = await Profile.findOneAndUpdate(
  //     {_id: req.params.id},
  //     {$set: req.body},
  //     {new: true}
  //   );
  //   res.status(200).json(edit);
  // } catch (e) {
  //     errorHandler(res, e);
  // }
}
