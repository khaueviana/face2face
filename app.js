var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

var mongoose = require('mongoose');
mongoose.connect('mongodb://face2face:sohosarrombados@concrete-shard-00-00-tnis6.mongodb.net:27017,concrete-shard-00-01-tnis6.mongodb.net:27017,concrete-shard-00-02-tnis6.mongodb.net:27017/test?ssl=true&replicaSet=concrete-shard-0&authSource=admin');

var userModel = require('./models/user');
var userModel = require('./models/game');

app.use(function (req, res, next) {

  if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
    jwt.verify(req.headers.authorization.split(' ')[1], 'RESTFULAPIs', function (err, decode) {

      if (err) {
        req.user = undefined;
      }

      req.user = decode;
      next();

    })
  } else {
    req.user = undefined;
    next();
  }
});

app.use('/', require('./controllers/index'));
app.use('/users', require('./controllers/users'));
app.use('/games', require('./controllers/games'));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
});

module.exports = app;
