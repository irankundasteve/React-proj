const catalogService = require('../services/catalogService');

function listRestaurants(req, res) {
  res.json({ restaurants: catalogService.listRestaurants() });
}

module.exports = { listRestaurants };
