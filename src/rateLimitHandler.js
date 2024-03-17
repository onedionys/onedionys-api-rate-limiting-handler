// src/rateLimitHandler.js

class RateLimitHandler {
    constructor(limit, interval) {
      this.limit = limit;
      this.interval = interval;
      this.requests = [];
    }
  
    handleRequest() {
      const now = Date.now();
      this.requests = this.requests.filter((timestamp) => now - timestamp < this.interval);
      if (this.requests.length < this.limit) {
        this.requests.push(now);
        return true;
      } else {
        return false;
      }
    }
  }
  
  module.exports = RateLimitHandler;
  