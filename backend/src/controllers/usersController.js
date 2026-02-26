const profileService = require('../services/profileService');

function getProfile(req, res) {
  const profile = profileService.getProfile(req.user.id);
  if (!profile) {
    return res.status(404).json({ message: 'User not found' });
  }
  return res.json({ profile });
}

function updateProfile(req, res) {
  const profile = profileService.updateProfile(req.user.id, req.body);
  if (!profile) {
    return res.status(404).json({ message: 'User not found' });
  }
  return res.json({ profile });
}

module.exports = { getProfile, updateProfile };
