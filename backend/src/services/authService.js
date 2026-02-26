const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { repositories } = require('./repositories');

const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret-key';

function sanitizeUser(user) {
  const { passwordHash, ...safe } = user;
  return safe;
}

async function register(payload) {
  const { name, email, password, phone } = payload;
  const existing = repositories.users.findAll((user) => user.email === email)[0];

  if (existing) {
    throw new Error('Email already in use');
  }

  const passwordHash = await bcrypt.hash(password, 10);
  const user = repositories.users.create({
    name,
    email,
    phone,
    passwordHash,
    walletBalance: 0
  });

  return sanitizeUser(user);
}

async function login(payload) {
  const { email, password } = payload;
  const user = repositories.users.findAll((item) => item.email === email)[0];

  if (!user) {
    throw new Error('Invalid credentials');
  }

  const valid = await bcrypt.compare(password, user.passwordHash);
  if (!valid) {
    throw new Error('Invalid credentials');
  }

  const token = jwt.sign({ userId: user.id, email: user.email }, JWT_SECRET, { expiresIn: '2h' });
  return { token, user: sanitizeUser(user) };
}

function forgotPassword(email) {
  const user = repositories.users.findAll((item) => item.email === email)[0];
  if (!user) {
    return { message: 'If this email exists, a reset token has been generated.' };
  }

  const resetToken = jwt.sign({ userId: user.id, email: user.email, type: 'reset' }, JWT_SECRET, { expiresIn: '30m' });
  repositories.passwordResets.create({ userId: user.id, token: resetToken, consumed: false });
  return { message: 'Reset token generated for development use.', resetToken };
}

function resetPassword(token, newPassword) {
  const record = repositories.passwordResets.findAll((item) => item.token === token && !item.consumed)[0];
  if (!record) {
    throw new Error('Invalid or expired reset token');
  }

  jwt.verify(token, JWT_SECRET);
  const user = repositories.users.findById(record.userId);
  if (!user) {
    throw new Error('User not found');
  }

  const passwordHash = bcrypt.hashSync(newPassword, 10);
  repositories.users.update(user.id, { passwordHash });
  repositories.passwordResets.update(record.id, { consumed: true });

  return { message: 'Password reset successful.' };
}

module.exports = {
  register,
  login,
  forgotPassword,
  resetPassword,
  sanitizeUser,
  JWT_SECRET
};
