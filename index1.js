var express = require('express');
var expressWinston = require('express-winston');
var winston = require('winston');
require('winston-loggly-bulk');

var app = module.exports = express();

app.use(expressWinston.logger({
  transports: [
    new winston.transports.Console({
      json: true,
      colorize: true
    }),
    new winston.transports.Loggly({
      subdomain: 'SUBDOMAIN',
      inputToken: 'TOKEN',
      json: true,
      tags: ["NodeJS-Express"]
    })
  ]
}));

app.get('/login', function (req, res) {
  res.send('Hi there..you have logged in')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
}) 