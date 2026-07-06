const { health, createCharge } = require('../src/server');
if (health().status !== 'ok') { throw new Error('health failed'); }
if (createCharge(100).amount !== 100) { throw new Error('charge failed'); }
console.log('smoke tests passed');
