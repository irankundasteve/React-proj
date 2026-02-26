const express = require('express');
const controller = require('../controllers/authController');

const router = express.Router();

router.post('/register', controller.register);
router.post('/login', controller.login);
router.post('/forgot', controller.forgotPassword);
router.post('/reset', controller.resetPassword);

module.exports = router;
