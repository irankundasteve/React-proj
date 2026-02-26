const express = require('express');
const controller = require('../controllers/cartController');
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/', auth, controller.getCart);
router.post('/items', auth, controller.addToCart);
router.patch('/items/:foodId', auth, controller.updateCartItem);
router.delete('/items/:foodId', auth, controller.removeFromCart);

module.exports = router;
