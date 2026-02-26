const { v4: uuid } = require('uuid');

const seedUserId = uuid();
const seedRestaurantId = uuid();
const seedFoodId = uuid();

const db = {
  users: [
    {
      id: seedUserId,
      name: 'Demo User',
      email: 'demo@example.com',
      passwordHash: '$2a$10$WgR3E88ll/aT0wZqbt1z4utzS6EU6FcJO2f8AFlqmKwcqfV7fGv7y',
      phone: '+10000000000',
      walletBalance: 50,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
  ],
  categories: ['Pizza', 'Burgers', 'Desserts', 'Drinks'],
  restaurants: [
    {
      id: seedRestaurantId,
      name: 'Sunrise Kitchen',
      category: 'Pizza',
      rating: 4.6,
      isOpen: true
    }
  ],
  foods: [
    {
      id: seedFoodId,
      restaurantId: seedRestaurantId,
      name: 'Margherita Pizza',
      category: 'Pizza',
      price: 12.99,
      description: 'Classic tomato, basil, mozzarella'
    }
  ],
  carts: [],
  orders: [],
  reviews: [],
  addresses: [],
  paymentMethods: [],
  passwordResets: []
};

module.exports = db;
