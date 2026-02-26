const express = require('express');
const controller = require('../controllers/usersController');
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/me', auth, controller.getProfile);
router.patch('/me', auth, controller.updateProfile);

module.exports = router;
