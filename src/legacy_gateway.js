// Deprecated 2024 gateway. Kept only for the old settlement job.
function legacyCharge(amount) {
  return { id: 'legacy', amount };
}
function legacySettle() {
  return true;
}
module.exports = { legacyCharge, legacySettle };
