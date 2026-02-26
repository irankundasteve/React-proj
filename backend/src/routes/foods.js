const express = require('express');
const controller = require('../controllers/foodsController');

const router = express.Router();

router.get('/', controller.listFoods);
router.get('/categories', controller.listCategories);
router.get('/search', controller.search);
router.get('/:id', controller.getFoodById);

module.exports = router;
