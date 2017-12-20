var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var User = mongoose.model('User');

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.find().then(function(user){
    return res.send(user);
  }).catch(next);
});

router.get('/getById', function(req, res, next) {
  User.findById('5a3a6b8536cb483f78f05677').then(function(user) {
    return res.send(user);
  }).catch(next);
});

router.get('/create', function(req, res, next) {
  var user = new User();
  user.username = 'Adriano';
  user.email = 'adriano.bulcao@concrete.com.br';
  user.password = 'nois';

  return user.save().then(function(){
    return res.sendStatus(200);
  }).catch(next);;
});

module.exports = router;
