const profileService = require('../services/profileService');

function getWallet(req, res) {
  const profile = profileService.getProfile(req.user.id);
  if (!profile) {
    return res.status(404).json({ message: 'User not found' });
  }

  return res.json({ walletBalance: profile.walletBalance || 0 });
}

module.exports = { getWallet };
