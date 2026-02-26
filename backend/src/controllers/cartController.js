const cartService = require('../services/cartService');

function getCart(req, res) {
  res.json({ cart: cartService.getUserCart(req.user.id) });
}

function addToCart(req, res) {
  const cart = cartService.addToCart(req.user.id, req.body);
  res.status(201).json({ cart });
}

function updateCartItem(req, res) {
  const cart = cartService.updateCartItem(req.user.id, req.params.foodId, req.body.quantity);
  res.json({ cart });
}

function removeFromCart(req, res) {
  const cart = cartService.removeFromCart(req.user.id, req.params.foodId);
  res.json({ cart });
}

module.exports = {
  getCart,
  addToCart,
  updateCartItem,
  removeFromCart
};
