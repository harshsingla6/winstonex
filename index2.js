var express = require('express');
var expressWinston = require('express-winston');
var winston = require('winston');
require('winston-loggly-bulk');

var app = module.exports = express();

var logger = new winston.Logger({
  transports: [
    new winston.transports.Loggly({
      subdomain: 'SUBDOMAIN',
      inputToken: 'TOKEN',
      json: true,
      tags: ["Winston-Morgan"]
    }),
    new winston.transports.Console({
      level: 'debug',
      handleExceptions: true,
      json: false,
      colorize: true
    })
  ],
  exitOnError: false
}),
			
loggerstream = {
  write: function (message, encoding) {
    logger.info(message);
  }
};

app.use(require("morgan")("combined", { "stream": loggerstream }));

app.get('/logout', function (req, res) {
  res.send('Hi there..you have logged in')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
}) 