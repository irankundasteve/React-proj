const { repositories } = require('./repositories');
const { sanitizeUser } = require('./authService');

function getProfile(userId) {
  const user = repositories.users.findById(userId);
  return user ? sanitizeUser(user) : null;
}

function updateProfile(userId, patch) {
  const user = repositories.users.update(userId, patch);
  return user ? sanitizeUser(user) : null;
}

function listAddresses(userId) {
  return repositories.addresses.findAll((entry) => entry.userId === userId);
}

function createAddress(userId, payload) {
  return repositories.addresses.create({ userId, ...payload });
}

function updateAddress(userId, addressId, payload) {
  const address = repositories.addresses.findById(addressId);
  if (!address || address.userId !== userId) {
    return null;
  }
  return repositories.addresses.update(addressId, payload);
}

function deleteAddress(userId, addressId) {
  const address = repositories.addresses.findById(addressId);
  if (!address || address.userId !== userId) {
    return false;
  }
  return repositories.addresses.remove(addressId);
}

function listPaymentMethods(userId) {
  return repositories.paymentMethods.findAll((entry) => entry.userId === userId);
}

function createPaymentMethod(userId, payload) {
  return repositories.paymentMethods.create({ userId, ...payload });
}

function updatePaymentMethod(userId, paymentId, payload) {
  const payment = repositories.paymentMethods.findById(paymentId);
  if (!payment || payment.userId !== userId) {
    return null;
  }
  return repositories.paymentMethods.update(paymentId, payload);
}

function deletePaymentMethod(userId, paymentId) {
  const payment = repositories.paymentMethods.findById(paymentId);
  if (!payment || payment.userId !== userId) {
    return false;
  }
  return repositories.paymentMethods.remove(paymentId);
}

module.exports = {
  getProfile,
  updateProfile,
  listAddresses,
  createAddress,
  updateAddress,
  deleteAddress,
  listPaymentMethods,
  createPaymentMethod,
  updatePaymentMethod,
  deletePaymentMethod
};
