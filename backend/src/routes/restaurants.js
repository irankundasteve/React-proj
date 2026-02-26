const express = require('express');
const controller = require('../controllers/restaurantsController');

const router = express.Router();

router.get('/', controller.listRestaurants);

module.exports = router;
