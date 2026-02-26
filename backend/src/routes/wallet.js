const express = require('express');
const controller = require('../controllers/walletController');
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/', auth, controller.getWallet);

module.exports = router;
