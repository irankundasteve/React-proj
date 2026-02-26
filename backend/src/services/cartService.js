const { repositories } = require('./repositories');

function getUserCart(userId) {
  let cart = repositories.carts.findAll((item) => item.userId === userId)[0];
  if (!cart) {
    cart = repositories.carts.create({ userId, items: [] });
  }
  return cart;
}

function addToCart(userId, item) {
  const cart = getUserCart(userId);
  const existing = cart.items.find((entry) => entry.foodId === item.foodId);
  if (existing) {
    existing.quantity += item.quantity || 1;
  } else {
    cart.items.push({ foodId: item.foodId, quantity: item.quantity || 1 });
  }
  return repositories.carts.update(cart.id, { items: cart.items });
}

function updateCartItem(userId, foodId, quantity) {
  const cart = getUserCart(userId);
  cart.items = cart.items.map((item) => (item.foodId === foodId ? { ...item, quantity } : item));
  cart.items = cart.items.filter((item) => item.quantity > 0);
  return repositories.carts.update(cart.id, { items: cart.items });
}

function removeFromCart(userId, foodId) {
  const cart = getUserCart(userId);
  cart.items = cart.items.filter((item) => item.foodId !== foodId);
  return repositories.carts.update(cart.id, { items: cart.items });
}

module.exports = {
  getUserCart,
  addToCart,
  updateCartItem,
  removeFromCart
};
