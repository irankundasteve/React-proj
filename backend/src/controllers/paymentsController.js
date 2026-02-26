const profileService = require('../services/profileService');

function listPaymentMethods(req, res) {
  res.json({ paymentMethods: profileService.listPaymentMethods(req.user.id) });
}

function createPaymentMethod(req, res) {
  const paymentMethod = profileService.createPaymentMethod(req.user.id, req.body);
  res.status(201).json({ paymentMethod });
}

function updatePaymentMethod(req, res) {
  const paymentMethod = profileService.updatePaymentMethod(req.user.id, req.params.id, req.body);
  if (!paymentMethod) {
    return res.status(404).json({ message: 'Payment method not found' });
  }
  return res.json({ paymentMethod });
}

function deletePaymentMethod(req, res) {
  const deleted = profileService.deletePaymentMethod(req.user.id, req.params.id);
  if (!deleted) {
    return res.status(404).json({ message: 'Payment method not found' });
  }
  return res.status(204).send();
}

module.exports = { listPaymentMethods, createPaymentMethod, updatePaymentMethod, deletePaymentMethod };
