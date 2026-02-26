const express = require('express');
const controller = require('../controllers/ordersController');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/', auth, controller.placeOrder);
router.get('/', auth, controller.listOrders);
router.get('/:id', auth, controller.getOrderDetails);
router.get('/:id/timeline', auth, controller.getOrderStatusTimeline);

module.exports = router;
