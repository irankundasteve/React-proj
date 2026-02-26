const authService = require('../services/authService');

async function register(req, res) {
  try {
    const user = await authService.register(req.body);
    res.status(201).json({ user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function login(req, res) {
  try {
    const result = await authService.login(req.body);
    res.json(result);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
}

function forgotPassword(req, res) {
  const result = authService.forgotPassword(req.body.email);
  res.json(result);
}

function resetPassword(req, res) {
  try {
    const result = authService.resetPassword(req.body.token, req.body.newPassword);
    res.json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

module.exports = {
  register,
  login,
  forgotPassword,
  resetPassword
};
