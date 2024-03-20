<h1 align="center">Welcome to One Dionys - API Rate Limiting Handler! 👋 </h1>

<p align="center">Functions to manage rate limiting when interacting with APIs, prevent abuse and ensure service availability. 💖 </p>

<p align="center">
<img src="https://img.shields.io/github/contributors/onedionys/onedionys-api-rate-limiting-handler?style=flat-square">
<img src="https://img.shields.io/github/issues/onedionys/onedionys-api-rate-limiting-handler?style=flat-square">
<img src="https://img.shields.io/github/stars/onedionys/onedionys-api-rate-limiting-handler?style=flat-square"> 
<img src="https://img.shields.io/github/forks/onedionys/onedionys-api-rate-limiting-handler?style=flat-square">
<img src="https://img.shields.io/github/last-commit/onedionys/onedionys-api-rate-limiting-handler.svg?style=flat-square">
<img src="https://img.shields.io/github/languages/code-size/onedionys/onedionys-api-rate-limiting-handler?style=flat-square">
<img src="https://img.shields.io/github/license/onedionys/onedionys-api-rate-limiting-handler?style=flat-square">
</p>

## 💾 Requirements

* `Web Browser` - Can be used as an emulator to build applications. Example [Chrome, Firefox, Safari & Opera].
* `Internet` - Because many use CDN and to make it easier to find solutions to all problems.

## 🎯 How To Use

#### Example Syntax

```javascript
const RateLimitHandler = require('./src/rateLimitHandler');

// Create a new rate limiter with a limit of 5 requests per minute
const rateLimiter = new RateLimitHandler(5, 60000);

// Handle incoming requests
if (rateLimiter.handleRequest()) {
  // Allow the request to proceed
  console.log('Request allowed');
} else {
  // Block the request
  console.log('Request blocked due to rate limiting');
}
```

#### Explanation

* This package provides a simple rate limiting handler for APIs. The RateLimitHandler class takes two parameters: limit, which specifies the maximum number of requests allowed within the given interval (in milliseconds). The handleRequest method is used to check whether a request should be allowed based on the current rate limit.

#### Return Value

* `true`: If the request is allowed within the rate limit.
* `false`: If the request exceeds the rate limit and should be blocked.

## 📆 Release Date

* v1.0.0 : 17 March 2024
* v1.0.1 : 18 March 2024
* v1.0.2 : 20 March 2024

## 🧑 Author

* Facebook : <a href="https://www.facebook.com/theonedionys"> Oned Ionys</a>
* Instagram : <a href="https://www.instagram.com/onedionys/"> @onedionys</a>
* Twitter : <a href="https://twitter.com/onedionys"> @onedionys</a>
* LinkedIn :  <a href="https://www.linkedin.com/in/onedionys/"> @onedionys</a>

## 📝 License

* Copyright © 2024 One Dionys
* **One Dionys - API Rate Limiting Handler is an open source project licensed under the MIT license**

## ☕️ Suppport & Donation

Love One Dionys - API Rate Limiting Handler? Support this project by donating or sharing with others in need.

<a href="https://www.buymeacoffee.com/onedionys"><img src="https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black"/> </a>

**Made with ❤️ One Dionys**
