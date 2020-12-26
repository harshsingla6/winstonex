var express = require('express');
var expressWinston = require('express-winston');
var winston = require('winston');
var app = module.exports = express();
var router = express.Router();

// Place the express-winston logger before the router.
app.use(expressWinston.logger({
  transports: [
    new winston.transports.Console({
      json: true,
      colorize: true
    })
  ]
}));

app.use(router);

// Place the express-winston errorLogger after the router.
app.use(expressWinston.errorLogger({
  transports: [
    new winston.transports.Console({
      json: true,
      colorize: true
    })
  ]
})); 