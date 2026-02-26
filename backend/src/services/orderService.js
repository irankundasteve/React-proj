const { repositories } = require('./repositories');
const { getUserCart } = require('./cartService');

function buildTimeline(status) {
  const timeline = [
    { step: 'PLACED', completed: true },
    { step: 'CONFIRMED', completed: ['CONFIRMED', 'PREPARING', 'OUT_FOR_DELIVERY', 'DELIVERED'].includes(status) },
    { step: 'PREPARING', completed: ['PREPARING', 'OUT_FOR_DELIVERY', 'DELIVERED'].includes(status) },
    { step: 'OUT_FOR_DELIVERY', completed: ['OUT_FOR_DELIVERY', 'DELIVERED'].includes(status) },
    { step: 'DELIVERED', completed: status === 'DELIVERED' }
  ];

  return timeline;
}

function placeOrder(userId, payload) {
  const cart = getUserCart(userId);
  if (!cart.items.length) {
    throw new Error('Cart is empty');
  }

  const order = repositories.orders.create({
    userId,
    items: cart.items,
    addressId: payload.addressId,
    paymentMethodId: payload.paymentMethodId,
    status: 'PLACED',
    total: payload.total || 0
  });

  repositories.carts.update(cart.id, { items: [] });
  return order;
}

function listOrders(userId) {
  return repositories.orders.findAll((order) => order.userId === userId);
}

function getOrderDetails(userId, orderId) {
  return repositories.orders.findAll((order) => order.userId === userId && order.id === orderId)[0] || null;
}

function getOrderStatusTimeline(userId, orderId) {
  const order = getOrderDetails(userId, orderId);
  if (!order) {
    return null;
  }

  return {
    orderId,
    status: order.status,
    timeline: buildTimeline(order.status)
  };
}

module.exports = {
  placeOrder,
  listOrders,
  getOrderDetails,
  getOrderStatusTimeline
};
