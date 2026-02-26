const express = require('express');
const controller = require('../controllers/paymentsController');
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/', auth, controller.listPaymentMethods);
router.post('/', auth, controller.createPaymentMethod);
router.patch('/:id', auth, controller.updatePaymentMethod);
router.delete('/:id', auth, controller.deletePaymentMethod);

module.exports = router;
