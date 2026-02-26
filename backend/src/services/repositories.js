const db = require('../data/store');
const BaseRepository = require('../repositories/baseRepository');

const repositories = {
  users: new BaseRepository(db.users),
  restaurants: new BaseRepository(db.restaurants),
  foods: new BaseRepository(db.foods),
  carts: new BaseRepository(db.carts),
  orders: new BaseRepository(db.orders),
  reviews: new BaseRepository(db.reviews),
  addresses: new BaseRepository(db.addresses),
  paymentMethods: new BaseRepository(db.paymentMethods),
  passwordResets: new BaseRepository(db.passwordResets)
};

module.exports = { db, repositories };
