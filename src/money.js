const config = require('./config');

function round(amount) {
  const f = Math.pow(10, config.decimals);
  return Math.round(amount * f) / f;
}

function format(amount) {
  return round(amount).toFixed(config.decimals) + ' ' + config.currency;
}

module.exports = { round, format };
