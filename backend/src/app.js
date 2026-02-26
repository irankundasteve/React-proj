const express = require('express');

const authRoutes = require('./routes/auth');
const usersRoutes = require('./routes/users');
const restaurantsRoutes = require('./routes/restaurants');
const foodsRoutes = require('./routes/foods');
const cartRoutes = require('./routes/cart');
const ordersRoutes = require('./routes/orders');
const reviewsRoutes = require('./routes/reviews');
const addressesRoutes = require('./routes/addresses');
const paymentsRoutes = require('./routes/payments');
const walletRoutes = require('./routes/wallet');

const app = express();

app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.use('/api/auth', authRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/restaurants', restaurantsRoutes);
app.use('/api/foods', foodsRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/orders', ordersRoutes);
app.use('/api/reviews', reviewsRoutes);
app.use('/api/addresses', addressesRoutes);
app.use('/api/payments', paymentsRoutes);
app.use('/api/wallet', walletRoutes);

app.use((err, req, res, next) => {
  if (!err) {
    return next();
  }
  return res.status(500).json({ message: 'Internal server error' });
});

module.exports = app;
