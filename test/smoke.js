const { health, createCharge } = require('../src/server');
if (health().status !== 'ok') { throw new Error('health failed'); }
if (createCharge(100).amount !== 100) { throw new Error('charge failed'); }
console.log('smoke tests passed');

const { createRefund } = require('../src/refunds');
if (createRefund('ch_1', 50).status !== 'pending') { throw new Error('refund failed'); }
console.log('refund tests passed');
