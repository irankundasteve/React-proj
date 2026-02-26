const catalogService = require('../services/catalogService');

function listFoods(req, res) {
  res.json({ foods: catalogService.listFoods() });
}

function getFoodById(req, res) {
  const food = catalogService.getFoodById(req.params.id);
  if (!food) {
    return res.status(404).json({ message: 'Food not found' });
  }
  return res.json({ food });
}

function search(req, res) {
  res.json(catalogService.search(req.query.q));
}

function listCategories(req, res) {
  res.json({ categories: catalogService.listCategories() });
}

module.exports = {
  listFoods,
  getFoodById,
  search,
  listCategories
};
