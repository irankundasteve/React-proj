const orderService = require('../services/orderService');

function placeOrder(req, res) {
  try {
    const order = orderService.placeOrder(req.user.id, req.body);
    res.status(201).json({ order });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

function listOrders(req, res) {
  res.json({ orders: orderService.listOrders(req.user.id) });
}

function getOrderDetails(req, res) {
  const order = orderService.getOrderDetails(req.user.id, req.params.id);
  if (!order) {
    return res.status(404).json({ message: 'Order not found' });
  }
  return res.json({ order });
}

function getOrderStatusTimeline(req, res) {
  const timeline = orderService.getOrderStatusTimeline(req.user.id, req.params.id);
  if (!timeline) {
    return res.status(404).json({ message: 'Order not found' });
  }
  return res.json(timeline);
}

module.exports = {
  placeOrder,
  listOrders,
  getOrderDetails,
  getOrderStatusTimeline
};
