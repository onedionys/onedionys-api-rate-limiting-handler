// test/rateLimitHandler.test.js

const assert = require('assert');
const RateLimitHandler = require('../src/rateLimitHandler');

describe('RateLimitHandler', function() {
  it('should allow requests within the limit', function() {
    const rateLimiter = new RateLimitHandler(5, 60000);
    for (let i = 0; i < 5; i++) {
      assert.strictEqual(rateLimiter.handleRequest(), true);
    }
  });

  it('should block requests beyond the limit', function() {
    const rateLimiter = new RateLimitHandler(5, 60000);
    for (let i = 0; i < 5; i++) {
      rateLimiter.handleRequest();
    }
    assert.strictEqual(rateLimiter.handleRequest(), false);
  });
});
