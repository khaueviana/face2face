var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');

var app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//Database
// var options = {
//   useMongoClient: true,
//   autoIndex: false, // Don't build indexes
//   reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
//   reconnectInterval: 500, // Reconnect every 500ms
//   poolSize: 10, // Maintain up to 10 socket connections
//   // If not connected, return errors immediately rather than waiting for reconnect
//   bufferMaxEntries: 0
// };

var mongoose = require('mongoose');
mongoose.connect('mongodb://face2face:sohosarrombados@concrete-shard-00-00-tnis6.mongodb.net:27017,concrete-shard-00-01-tnis6.mongodb.net:27017,concrete-shard-00-02-tnis6.mongodb.net:27017/test?ssl=true&replicaSet=concrete-shard-0&authSource=admin');

var userModel = require('./models/user');

var index = require('./routes/index');
var users = require('./routes/users');

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
});

module.exports = app;
