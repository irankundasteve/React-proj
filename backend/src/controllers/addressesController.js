const profileService = require('../services/profileService');

function listAddresses(req, res) {
  res.json({ addresses: profileService.listAddresses(req.user.id) });
}

function createAddress(req, res) {
  const address = profileService.createAddress(req.user.id, req.body);
  res.status(201).json({ address });
}

function updateAddress(req, res) {
  const address = profileService.updateAddress(req.user.id, req.params.id, req.body);
  if (!address) {
    return res.status(404).json({ message: 'Address not found' });
  }
  return res.json({ address });
}

function deleteAddress(req, res) {
  const deleted = profileService.deleteAddress(req.user.id, req.params.id);
  if (!deleted) {
    return res.status(404).json({ message: 'Address not found' });
  }
  return res.status(204).send();
}

module.exports = { listAddresses, createAddress, updateAddress, deleteAddress };
