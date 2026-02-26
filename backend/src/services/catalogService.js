const { db, repositories } = require('./repositories');

function listCategories() {
  return db.categories;
}

function listRestaurants() {
  return repositories.restaurants.findAll();
}

function listFoods() {
  return repositories.foods.findAll();
}

function getFoodById(id) {
  return repositories.foods.findById(id);
}

function search(term = '') {
  const normalized = term.trim().toLowerCase();
  if (!normalized) {
    return { restaurants: listRestaurants(), foods: listFoods() };
  }

  return {
    restaurants: listRestaurants().filter((item) => item.name.toLowerCase().includes(normalized)),
    foods: listFoods().filter((item) => item.name.toLowerCase().includes(normalized))
  };
}

module.exports = {
  listCategories,
  listRestaurants,
  listFoods,
  getFoodById,
  search
};
