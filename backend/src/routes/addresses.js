const express = require('express');
const controller = require('../controllers/addressesController');
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/', auth, controller.listAddresses);
router.post('/', auth, controller.createAddress);
router.patch('/:id', auth, controller.updateAddress);
router.delete('/:id', auth, controller.deleteAddress);

module.exports = router;
