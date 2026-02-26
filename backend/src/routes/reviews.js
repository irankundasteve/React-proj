const express = require('express');
const controller = require('../controllers/reviewsController');

const router = express.Router();

router.get('/', controller.listReviews);

module.exports = router;
