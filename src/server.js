const config = require('./config');

function health() {
  return { status: 'ok', currency: config.currency };
}

function createCharge(amount) {
  if (amount <= 0) throw new Error('amount must be positive');
  return { id: 'ch_' + Date.now(), amount, currency: config.currency };
}

const { createRefund } = require('./refunds');

module.exports = { health, createCharge, createRefund };
