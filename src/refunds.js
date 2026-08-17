const config = require('./config');

function createRefund(chargeId, amount) {
  if (!chargeId) throw new Error('chargeId is required');
  if (amount <= 0) throw new Error('amount must be positive');
  return { id: 'rf_' + chargeId, amount, currency: config.currency, status: 'pending' };
}

module.exports = { createRefund };
